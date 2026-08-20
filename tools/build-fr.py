#!/usr/bin/env python3
"""Generate fr/index.html from index.html + assets/i18n-fr.js.

The French copy deck stays the single source of French on the site. This
script applies it to the English markup exactly the way assets/main.js used
to apply it in the browser, and writes the result as a real page so that
crawlers and link previews see French without running any JavaScript.

Run it from the repo root after touching index.html or the deck:

    python3 tools/build-fr.py

Requires beautifulsoup4 (pip3 install --user beautifulsoup4) and, to read
the deck, macOS's JavaScriptCore via osascript.
"""

import json
import os
import re
import subprocess
import sys
import tempfile

try:
    from bs4 import BeautifulSoup
except ImportError:
    sys.exit("beautifulsoup4 is missing. Run: pip3 install --user beautifulsoup4")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "index.html")
DECK = os.path.join(ROOT, "assets", "i18n-fr.js")
OUT_DIR = os.path.join(ROOT, "fr")
OUT = os.path.join(OUT_DIR, "index.html")

SITE = "https://atelierdubund.com"
EN_URL = SITE + "/"
FR_URL = SITE + "/fr/"

# html.parser lowercases every attribute name, which is right for HTML and
# wrong for SVG: these four are case-sensitive, and the map, the masks and the
# icons render incorrectly without their capitals. Restored on the way out.
CASE_SENSITIVE_ATTRS = ("viewBox", "preserveAspectRatio", "maskUnits", "patternUnits")


def read_deck():
    """Evaluate the deck and hand back its data as a dict.

    The deck is plain data apart from ui.viewPhoto, which JSON drops. Nothing
    static needs it — main.js still reads the real file at runtime.
    """
    with open(DECK, encoding="utf-8") as fh:
        source = fh.read()
    program = "var window = {};\n%s\nconsole.log(JSON.stringify(window.ADB_FR));\n" % source
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as tmp:
        tmp.write(program)
        path = tmp.name
    try:
        proc = subprocess.run(
            ["osascript", "-l", "JavaScript", path],
            capture_output=True, text=True,
        )
    finally:
        os.unlink(path)
    blob = (proc.stdout + proc.stderr).strip()
    start = blob.find("{")
    if start < 0:
        sys.exit("could not read the deck:\n" + blob)
    return json.loads(blob[start:])


def each(soup, selector, value, apply_one):
    """Mirror main.js: a bare value hits every match, a list maps by position,
    and null leaves the English in place."""
    nodes = soup.select(selector)
    for i, node in enumerate(nodes):
        if isinstance(value, list):
            if i >= len(value):
                continue
            v = value[i]
        else:
            v = value
        if v is None:
            continue
        apply_one(node, v)


def set_text(node, value):
    node.clear()
    node.append(value)


def set_html(node, value):
    node.clear()
    fragment = BeautifulSoup(value, "html.parser")
    for child in list(fragment.contents):
        node.append(child)


def head_meta(soup, **kw):
    """Find one <meta> by name= or property=."""
    for key, val in kw.items():
        tag = soup.find("meta", attrs={key: val})
        if tag:
            return tag
    return None


def absolutise(soup):
    """/fr/ is one level down, so relative asset paths would 404 there."""
    for attr in ("src", "href"):
        for node in soup.find_all(attrs={attr: True}):
            v = node[attr]
            if v.startswith(("assets/", "images/")):
                node[attr] = "/" + v


def main():
    with open(SRC, encoding="utf-8") as fh:
        soup = BeautifulSoup(fh.read(), "html.parser")
    fr = read_deck()

    # ---- the deck, applied as main.js applied it -------------------------
    soup.html["lang"] = fr["lang"]
    soup.title.string = fr["title"]

    desc = head_meta(soup, name="description")
    if desc:
        desc["content"] = fr["description"]

    for selector, value in (fr.get("text") or {}).items():
        each(soup, selector, value, set_text)
    for selector, value in (fr.get("html") or {}).items():
        each(soup, selector, value, set_html)
    for selector, spec in (fr.get("attr") or {}).items():
        for name, value in spec.items():
            each(soup, selector, value, lambda n, v, a=name: n.__setitem__(a, v))

    # ---- head: this page is French, and it is its own URL ----------------
    for key, val, attr in (
        ("og:title", fr["title"], "property"),
        ("og:description", fr["description"], "property"),
        ("og:url", FR_URL, "property"),
        ("og:locale", "fr_CA", "property"),
        ("twitter:title", fr["title"], "name"),
        ("twitter:description", fr["description"], "name"),
    ):
        tag = soup.find("meta", attrs={attr: key})
        if tag:
            tag["content"] = val

    for link in soup.find_all("link", rel="canonical"):
        link["href"] = FR_URL
    for link in soup.find_all("link", rel="alternate"):
        if link.get("hreflang") == "x-default":
            link["href"] = EN_URL
        elif link.get("hreflang", "").startswith("fr"):
            link["href"] = FR_URL
        else:
            link["href"] = EN_URL

    # ---- the toggle points home ------------------------------------------
    ui = fr.get("ui") or {}
    toggle = soup.find(id="adbLang")
    if toggle:
        toggle["href"] = "/"
        toggle["hreflang"] = "en-CA"
        aria = ui.get("switchAria", "Switch to English")
        toggle["aria-label"] = aria
        toggle["title"] = aria
    label = soup.find(id="adbLangLabel")
    if label:
        set_text(label, ui.get("label", "FR-CA"))

    # the footer's language link points home too, so its hreflang follows
    for node in soup.select(".adb-footer__list a[hreflang]"):
        if node.get("href") == "/":
            node["hreflang"] = "en-CA"

    absolutise(soup)

    os.makedirs(OUT_DIR, exist_ok=True)
    html = str(soup)
    for attr in CASE_SENSITIVE_ATTRS:
        html = html.replace(attr.lower() + "=", attr + "=")
    # a generated file should say so
    html = html.replace(
        "<head>",
        "<head>\n<!-- Generated by tools/build-fr.py from index.html + assets/i18n-fr.js. Do not edit by hand. -->",
        1,
    )
    with open(OUT, "w", encoding="utf-8") as fh:
        fh.write(html)

    leftovers = len(re.findall(r"\?lang=", html))
    print("wrote %s (%d KB)" % (os.path.relpath(OUT, ROOT), len(html.encode()) // 1024))
    if leftovers:
        print("  warning: %d '?lang=' reference(s) still in the output" % leftovers)


if __name__ == "__main__":
    main()
