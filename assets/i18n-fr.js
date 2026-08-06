/* Atelier du Bund — French (FR-CA) copy deck.
   Pure data, no logic: assets/main.js reads this and swaps the page in place.
   If this file fails to load, the toggle degrades to flipping its label only.

   Register: vouvoiement throughout, heritage tone, Québec French.
     is a non-breaking space — French sets one before : ; ! ? and inside
   « », and it keeps "699 $" and "100 % laine" from breaking across lines.

   Locked terms (French side of the house glossary):
     sur mesure (never « grande mesure » / bespoke)   maîtres tailleurs
     styles maison (never « signatures », « modèles »)  fini à la main
     thermocollé / entoilé, named as plainly as polyester
     la Bande Rouge — capital B, never « bande rouge » lowercase
     the word « cachemire » must not appear anywhere. */

window.ADB_FR = {

  lang: 'fr-CA',
  title: 'Atelier du Bund — L’art du tailleur shanghaïen, façonné pour vous.',
  description: 'Complets sur mesure dans la tradition des tailleurs de Shanghai et de Hong Kong, arrivée au Canada. Vraiment sur mesure, jamais un algorithme.',

  /* ---- plain text nodes: selector -> string, or array in document order
          (null keeps the English) ---------------------------------------- */
  text: {
    '.adb-nav__link': ['À propos', 'Héritage', 'La Collection fondatrice', 'Comment ça se passe'],
    '.adb-book': 'Réserver un rendez-vous privé',
    '.adb-hero__price-label': 'Complets sur mesure à partir de',
    '.adb-hero__price-tax': 'Taxes incluses',

    '.adb-pillar__title': [
      'Sur rendez-vous uniquement',
      'La main shanghaïenne',
      'Pour le corps que vous avez',
      'Fait pour n’appartenir qu’à vous'
    ],
    '.adb-pillar__text': [
      'Un seul client à la fois, mesuré à la main. Autour d’un thé, nous trouvons la ligne qui vous convient et la façonnons à votre corps, en lisant la posture et les proportions comme aucun scanner ne le fait. Pour une coupe qui est vraiment la vôtre.',
      'Chaque complet est coupé et fini à la main dans la tradition Shanghai–Hong Kong, par des maîtres tailleurs formés à son artisanat. Fait pour tenir sa ligne.',
      'Personne n’est bâti sur un patron standard. Nous coupons pour les épaules que vous avez et la posture que vous portez, afin que le complet s’ajuste à vous, et jamais vous à lui.',
      'Doublures affirmées, surpiqûres contrastantes, boutons de céramique et de corne, broderie personnalisée : les détails qui élèvent votre complet en un instant, et le rendent unique. Découvrez la sélection complète à votre rendez-vous.'
    ],
    '.adb-about__from-tax': 'Taxes incluses',
    '.adb-about__from-tiers': 'Le Premier · L’Essentiel · La Signature · La Réserve   ↓   Plus de détails ci-dessous',

    '.heritage__subtitle': 'Un héritage qui perdure.',
    '.heritage__legend--china': 'Chine 中國',
    '.heritage__legend--canada': 'Canada 加拿大',
    '.heritage__step-name': ['Ningbo', 'Shanghai', 'Hong Kong', 'Montréal'],
    '.heritage__marker--island .heritage__marker-label': 'Montréal 蒙特利爾',

    '.adb-collection__heading': 'Élégance moderne, artisanat traditionnel.',
    '.adb-collection__lede': 'Chaque détail peut être personnalisé. Ces styles maison sont simplement notre recommandation : le choix aisé pour une allure élégante.',
    '.adb-styletabs__label': ['Femmes', 'Hommes'],
    '.adb-styletab': ['La Vivienne', 'La Maggie', 'Le Vincent', 'Le Maximilian'],
    '.adb-collection__hint': 'Touchez un point marqué pour découvrir ce qui définit chaque style',
    '.adb-clview__label': ['Devant', 'Dos'],

    '.adb-fabrics__lede': 'Chaque complet est coupé à vos mesures par les mêmes maîtres tailleurs. L’étoffe et la construction suivent le complet dont vous avez besoin, d’un devant thermocollé qui tient sa ligne à un devant entoilé en laine. Ci-dessous, ce à quoi chacun est destiné. Le vôtre se choisit en personne, à votre rendez-vous.',
    '.adb-cloth__caption': 'Sérieux à l’extérieur. Fête à l’intérieur.',
    '.adb-tier__name': ['Le Premier', 'L’Essentiel', 'La Signature', 'La Réserve'],
    '.adb-tier__purpose': [
      'Celui par lequel on commence.',
      'Celui dans lequel on voyage.',
      'Celui que l’on porte cinq jours sur sept.',
      'Celui qui vieillit avec vous.'
    ],
    '.adb-tier__desc': [
      'Votre premier complet, coupé à votre carrure et construit simplement pour qu’il repose léger sur l’épaule tout au long d’une journée. Un devant thermocollé garde la ligne nette, et le polyester perd ses plis pendant la nuit et accepte le fer sans histoire.',
      'Se glisse dans un bagage à main et en ressort prêt, pour que vous puissiez descendre d’un long vol et entrer directement en réunion. Le polyester laisse les plis tomber d’eux-mêmes pendant la nuit, sur le cintre.',
      'Lavable à la machine à la maison, il suit le rythme de la semaine au lieu d’attendre le nettoyeur. Le caractère de la laine, sans l’entretien.',
      'Pure laine, respirante d’une saison à l’autre. Elle prend forme sous la chaleur et la vapeur, s’installe dans les épaules que vous avez et garde cette ligne pendant des années.'
    ],
    '.adb-tier__spec': ['100 % polyester', '50 % laine, 50 % polyester', '70 % laine, 30 % polyester', '100 % laine'],
    '.adb-tier__foot': [
      'Pour la pièce où vous entrez pour la première fois.',
      'Pour les semaines qui bougent.',
      'Pour le mardi ordinaire.',
      'Pour les années à venir.'
    ],
    '.adb-cloth__spec p': 'Chaque doublure est un jacquard, deux motifs jamais identiques, et la couture en suit la couleur.',

    '.adb-how__heading': 'Quatre étapes vers un complet qui est le vôtre.',
    '.adb-how__title': ['L’invitation', 'La prise de mesures', 'La confection', 'Le port'],
    '.adb-how__text': [
      'Une heure sur rendez-vous, dans un atelier privé de Montréal. Autour d’un thé, nous parlons de ce que vous attendez d’un complet et de ce qui n’a jamais été tout à fait juste, pour déterminer le style maison qui vous convient.',
      'Nous prenons vos mesures à la main, en lisant la posture et les proportions comme aucun scanner ne le fait. Puis nous choisissons l’étoffe, la doublure et les finitions qui définiront votre complet.',
      'Votre complet est coupé et fini à la main dans la tradition Shanghai–Hong Kong, construit pour tenir sa ligne longtemps après avoir quitté l’établi. De quatre à cinq semaines, du début à la fin.',
      'Un dernier essayage à l’atelier, pour que votre complet tombe exactement comme il le doit, et devienne celui vers lequel vous allez d’abord. Il peut aussi vous être expédié.'
    ],

    '.adb-reserve__heading': 'Façonnez votre complet.',
    '.adb-reserve__lede': 'Une expérience privée et un artisanat d’héritage, pour un complet coupé pour vous seul. Réservez votre heure avec nous.',
    '.adb-reserve__btn': 'Réserver un rendez-vous privé',
    '.adb-reserve__tax': 'Taxes incluses',

    '.adb-footer__h': ['Explorer', 'Atelier'],
    '.adb-footer__list a': ['À propos', 'Héritage', 'La Collection fondatrice', 'Réserver un rendez-vous', null, null, null, 'English'],
    '.adb-mobilecta': 'Réserver un rendez-vous privé'
  },

  /* ---- elements holding markup (a <br>, a <span>) ---------------------- */
  html: {
    '.adb-hero__title': 'L’art du tailleur shanghaïen,<br>façonné pour vous.',
    '.adb-hero__price-value': '699 $ <span>CAD</span>',
    '.adb-about .adb-eyebrow': '<span class="adb-eyebrow__rule"></span>À propos',
    /* The heading measure is 20ch, and French runs ~20% longer than English:
       « et … pour votre corps » stranded « corps, » on a line of its own. The
       comma-parallel is tighter and matches the English's two beats, and the
       nbsp keeps « Montréal. » from being orphaned off the last line. */
    '.adb-about__heading': 'Mesuré à la main, façonné à votre corps,<br>dans un atelier privé au centre-ville de&nbsp;Montréal.',
    '.adb-about__from-price': 'À partir de <span>699 $ CAD</span>',
    '.heritage__eyebrow': 'Le Hongbang · 紅幫 · L’héritage des tailleurs de la Bande Rouge',
    '.heritage__marker--canada .heritage__marker-label': 'Montréal<br>蒙特利爾',
    '.adb-collection__intro .adb-eyebrow': '<span class="adb-eyebrow__rule"></span>La Collection fondatrice<span class="adb-eyebrow__rule"></span>',
    '.adb-cloth__eyebrow': '<span class="adb-eyebrow__rule"></span>L’Étoffe',
    '.adb-fabrics__heading': 'La même main dans chaque complet.<br>Construit pour la vie que vous menez.',
    '.adb-cloth__note': 'Un ajustement inclus avec chaque complet.<br>Tous nos prix incluent les taxes.',
    '.adb-how__head .adb-eyebrow': '<span class="adb-eyebrow__rule"></span>Comment ça se passe',
    '.adb-reserve .adb-eyebrow': '<span class="adb-eyebrow__rule"></span>Sur rendez-vous · Montréal',
    '.adb-reserve__note': 'Complets sur mesure à partir de <span>699 $ CAD</span>',
    '.adb-footer__blurb': 'Atelier du Bund est né d’une recherche : celle d’une expérience de complet privée, et de l’héritage d’artisanat qui la porte.&nbsp;Fondé à Montréal par <span class="adb-footer__founder">Zhenai Xiao</span>, dans la lignée des maîtres tailleurs shanghaïens — sur une conviction simple : bien s’habiller est un investissement que l’on porte des années, et devrait être plus accessible.'
  },

  /* ---- attributes ------------------------------------------------------ */
  attr: {
    /* the footer language link points the other way round in French */
    '.adb-footer__list a': { href: [null, null, null, null, null, null, null, '?lang=en'] },
    '.adb-brand': { 'aria-label': 'Atelier du Bund — accueil' },
    '.adb-nav': { 'aria-label': 'Principale' },
    '.adb-nav-toggle': { 'aria-label': 'Ouvrir le menu' },
    '.adb-hero__img': { alt: 'Un complet trois-pièces marine sur mesure aux boutonnières rouges et un briquet chinois en bois sculpté, dans un hall de laiton et de marbre.' },
    '.adb-about__slide': { alt: [
      'Boutonnières fonctionnelles rouges sur un poignet de veston marine.',
      'Une femme en gilet marine à boutons rouges, assise dans un studio lumineux.',
      'Un gilet de jacquard sombre à boutons rouges, porté dans un hall de laiton et de marbre.',
      'Revers de veston marine aux boutonnières fonctionnelles rouges, par-dessus un gilet.',
      'Une main glissant une carte dans la doublure au toucher soyeux, rouge profond, d’un veston.',
      'Ajuster un poignet devant un miroir.'
    ] },
    '.adb-about__dots': { 'aria-label': 'Choisir une photo' },
    '#heritage': { 'aria-label': 'Le Hongbang, l’héritage des tailleurs de la Bande Rouge' },
    '.adb-styletabs__pill': { 'aria-label': ['Styles maison pour femmes', 'Styles maison pour hommes'] },
    '.adb-cloth__figure img': { alt: 'Étoffes de complet pliées auprès de doublures jacquard rouge, or, magenta, verte, bleue et bronze, chacune au bord cranté.' },
    '.adb-band__img': { alt: 'Un poignet de chemise blanche sur mesure ajusté devant un miroir de hall encadré de laiton.' },
    '.adb-reserve__img': { alt: 'Une ancienne fiche de mesures de tailleur, ses schémas et ses instructions tracés à l’encre bleue.' }
  },

  /* ---- strings the script builds at runtime ---------------------------- */
  ui: {
    label: 'FR-CA',
    switchAria: 'Switch to English',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    viewPhoto: function (n) { return 'Voir la photo ' + n; },
    front: 'Devant',
    back: 'Dos'
  },

  /* ---- Heritage: four steps ------------------------------------------- */
  cities: [
    { cn: '寧波', title: 'Ningbo, là où tout commence', year: 'Fin du XIXᵉ siècle',
      text: 'Un lettré de la dynastie Qing écrivait qu’« on trouve des tailleurs partout, et surtout à Ningbo ». De cette ville côtière, le long de la rivière Fenghua, sont venus les artisans qui allaient maîtriser le complet occidental. Ils tiennent leur nom des hommes qu’ils habillaient : les Occidentaux que les Chinois appelaient alors les « cheveux rouges », 紅毛. Ainsi naquit le Hongbang, la Bande Rouge : les tailleurs des étrangers aux cheveux rouges.\n\nUn artisanat appris là où deux mondes se rencontraient.' },
    { cn: '上海', title: 'Shanghai, le Bund', year: 'Années 1920-1930',
      text: 'En 1896, un tailleur de Ningbo ouvrait l’une des premières maisons de complets de Shanghai ; en une génération, plus de quatre cents bordaient la route de Nankin et les plus grandes avenues de la ville. Dans l’âge d’or de Shanghai, la Bande Rouge devint l’élite des tailleurs de la ville : épaules structurées, poitrines galbées, revers cousus à la main, des techniques empruntées aux coupeurs britanniques et russes, puis faites entièrement siennes. Dans les années 1940, ils étaient six tailleurs sur dix dans la ville, habillant ses banquiers, ses vedettes de cinéma et ses maisons étrangères.\n\nNotre maison tient son nom du Bund, emblème de cet âge d’or.' },
    { cn: '香港', title: 'Hong Kong, emporté vers le sud', year: '1949',
      text: 'Quand l’époque bascula, les maîtres de la Bande Rouge emportèrent leur artisanat vers le sud, à Hong Kong, plusieurs suivant les clients internationaux qu’ils habillaient depuis longtemps. La main shanghaïenne rencontra le rythme d’une nouvelle ville, et la lignée se poursuivit : les mêmes méthodes, la même précision silencieuse, portées fidèlement jusqu’à aujourd’hui. Ce qui a commencé sur la rivière Fenghua, et s’est épanoui sur le Bund, se poursuit maintenant à Montréal.\n\nLe fil n’a jamais été coupé ; il n’a fait que voyager.' },
    { cn: '蒙特利爾', title: 'Montréal, un nouveau chapitre', year: 'Aujourd’hui',
      text: 'Le Canada accueille des personnes d’origine chinoise depuis bien plus de 200 ans. Des premiers travailleurs venus de Canton dans les années 1780 pour prendre part à la traite des fourrures, aux ouvriers qui ont bâti le chemin de fer canadien dans les années 1880, jusqu’aux familles arrivées au fil des décennies. Atelier du Bund s’inscrit dans cette longue histoire. Fondé à Montréal par Zhenai Xiao, fière Canadienne d’origine chinoise, l’atelier porte l’artisanat de la Bande Rouge dans un nouveau pays et un nouveau siècle.\n\nIl est temps que cet héritage, un siècle et demi de tailleurs chinois, soit connu des Canadiens, coupé pour les vies qu’ils mènent aujourd’hui : une lignée d’artisanat précis et durable, offerte à tous ceux qui souhaitent la découvrir.' }
  ],

  /* ---- Founding Collection: names, tags, blurbs, alts, hotspots -------- */
  styles: {
    vincent: {
      name: 'Le Vincent', tag: 'Homme · Signature',
      blurb: 'Notre coupe unisexe signature : du bureau à la soirée, sans effort.',
      frontAlt: 'Le Vincent — complet marine droit, vue de devant.',
      backAlt: 'Le Vincent — complet marine droit, vue de dos.'
    },
    maximilian: {
      name: 'Le Maximilian', tag: 'Homme · Croisé',
      blurb: 'Le croisé, l’élégance à la manière traditionnelle.',
      frontAlt: 'Le Maximilian — complet brun croisé, vue de devant.',
      backAlt: 'Le Maximilian — complet brun croisé, vue de dos.'
    },
    vivienne: {
      name: 'La Vivienne', tag: 'Femme · Signature',
      blurb: 'Notre coupe unisexe signature : du bureau à la soirée, sans effort.',
      frontAlt: 'La Vivienne — complet noir à revers à pointes, vue de devant.',
      backAlt: 'La Vivienne — complet noir à revers à pointes, vue de dos.'
    },
    maggie: {
      name: 'La Maggie', tag: 'Femme · Soirée',
      blurb: 'Notre tenue de soirée féminine : romantique, coupée pour le jour comme pour le soir.',
      frontAlt: 'La Maggie — complet gris à revers crantés, vue de devant.',
      backAlt: 'La Maggie — complet gris à revers crantés, vue de dos.'
    }
  },

  /* Hotspots are shared across the four styles, so they are keyed by their
     English title and translated once. */
  hotspots: {
    'Peak lapel': { title: 'Revers à pointes',
      text: 'Le revers le plus affirmé qui soit. Il élargit l’épaule et affine tout ce qui se trouve dessous.' },
    'Rounded lapel': { title: 'Revers arrondi',
      text: 'Les pointes sont arrondies plutôt que taillées net, pour une ligne plus douce qui se porte jusqu’au soir.' },
    'Shaped through the body': { title: 'Cintré dans le corps',
      text: 'Des coutures qui resserrent le veston à la taille, afin qu’il suive la ligne de votre corps au lieu de l’enfermer.' },
    'Straight through the body': { title: 'Droit dans le corps',
      text: 'Coupé pour tomber droit de la poitrine à l’ourlet, pour une ligne plus large et plus architecturale.' },
    'Princess seams': { title: 'Coutures princesse',
      text: 'Des coutures qui épousent la poitrine et resserrent la taille, pour un veston qui cintre et qui flatte.' },
    'Single button': { title: 'Bouton unique',
      text: 'Se ferme à la taille, pour que votre veston s’ouvre en un long V qui allonge votre silhouette.' },
    'Two buttons': { title: 'Deux boutons',
      text: 'Fermés plus haut, ils remontent la taille et allongent les jambes.' },
    'Six-on-two': { title: 'Six boutons, deux fermés',
      text: 'Six boutons, deux qui ferment : la disposition classique du croisé.' },
    'Pintuck seam': { title: 'Couture nervurée',
      text: 'Un pli étroit cousu sur toute la longueur de la jambe, devant et derrière, pour que votre pantalon tienne sa ligne et garde une allure structurée.' },
    'Straight leg': { title: 'Jambe droite',
      text: 'Coupée pour flatter plus de morphologies qu’une jambe ajustée, en particulier au mollet et à la cuisse.' },
    'Structured shoulder': { title: 'Épaule structurée',
      text: 'Une ligne d’épaule définie qui carre votre carrure et structure toute morphologie.' },
    'Puffed shoulder': { title: 'Épaule bouffante',
      text: 'Un léger relief à l’épaule, romantique sans perdre la ligne du complet.' },
    'Contrast stitching': { title: 'Surpiqûres contrastantes',
      text: 'Boutonnières et boutons cousus dans la couleur de votre doublure. Professionnel, avec du caractère.' },
    'Single vent': { title: 'Fente simple',
      text: 'Une seule ouverture au dos, pour que votre veston bouge avec vous quand vous vous asseyez. Une ligne nette de derrière.' },
    'Double vent': { title: 'Double fente',
      text: 'Deux ouvertures plutôt qu’une, pour que le veston tombe net sur la hanche.' }
  }
};
