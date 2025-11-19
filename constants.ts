import { Wine, TimelineEvent } from './types';

/*
  ========================================
  GESTION DES ASSETS (IMAGES / VIDÉOS)
  ========================================
*/

// URLs fournies
export const IMAGES = {
  // Vins Spécifiques
  esthete: "https://www.copainscommeraisins.com/823-large_default/esthete-2022.jpg",
  chartreuse: "https://www.copainscommeraisins.com/544-large_default/la-chartreuse-2018.jpg",
  haut_greniere: "https://www.copainscommeraisins.com/543-large_default/chateau-haut-la-greniere-2022.jpg",
  greniere_classique: "https://www.copainscommeraisins.com/542-large_default/chateau-de-la-greniere-2020.jpg",
  
  // Images génériques pour les vins manquants (utilisent Grenière Classique par défaut selon consigne)
  franc_pour_cent: "https://www.copainscommeraisins.com/823-large_default/esthete-2022.jpg", // Esthétique proche
  oubliee: "https://www.copainscommeraisins.com/542-large_default/chateau-de-la-greniere-2020.jpg",
  parenthese_blanc: "https://www.copainscommeraisins.com/544-large_default/la-chartreuse-2018.jpg", // Placeholder bouteille claire si possible, sinon Chartreuse
  parenthese_rose: "https://www.copainscommeraisins.com/543-large_default/chateau-haut-la-greniere-2022.jpg", // Placeholder

  // Histoire & Terroir
  moines: "https://images.unsplash.com/photo-1464695110811-dcf3903dc2f4?q=80&w=1000&auto=format&fit=crop",
  famille: "https://images.unsplash.com/photo-1533090481720-856c6e3c1935?q=80&w=1000&auto=format&fit=crop",
  jp_audren: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
  
  // Textures
  terroir_texture: "https://images.unsplash.com/photo-1614730341194-75c6074065db?q=80&w=2574&auto=format&fit=crop",
};

export const FAMILY_PROFILES = [
  {
    name: "Jean-Pierre Dubreuil",
    title: "Le Bâtisseur",
    description: `Figure tutélaire du domaine, Jean-Pierre Dubreuil a transformé l'héritage en ambition. Dès 1986, il pressent que la Grenière doit s'affranchir des codes établis. Bâtisseur infatigable, il restructure le vignoble, introduit le béton brut et ouvre les marchés export, ancrant la propriété dans une stabilité économique indispensable à toute quête d'excellence.`
  },
  {
    name: "Audren Dubreuil",
    title: "L'Esthète",
    description: `Œnologue de formation, Audren incarne le virage technique du XXIe siècle. Sa vision est celle de la précision : sélection parcellaire chirurgicale, vinification intégrale, exploration du "Sans Soufre". Il apporte une lecture modernisée du terroir, cherchant la pureté du fruit et l'élégance des tanins plutôt que la sur-extraction.`
  }
];

export const WINES: Wine[] = [
  {
    id: 'haut-la-greniere',
    name: "Château Haut La Grenière",
    appellation: "Lussac Saint-Émilion",
    type: 'Red',
    description: `Le parcellaire du Château Haut La Grenière surplombe le plateau du « Champs de Verdus », point culminant du lieu-dit La Grenière. Merlot, cabernet franc, cabernet sauvignon prennent racines dans un sol sablo-argileux et bénéficient d’un climat chaud et venteux en été. Le terroir du Haut La Grenière aide à la genèse de raisins d’un fruit intense avec des tanins relativement souples. L’élevage en cuve béton révèle la pureté du fruit et la générosité de ce vin.`,
    tastingNotes: `« Invitantes nuances de cassis, réglisse et de cacao. Le vin se distingue par sa fraîcheur et son harmonie. Il a visiblement été décidé d’écouter le terroir. »`,
    production: "16 000 cols produites",
    critic: "Yves Beck (2022)",
    score: "90/100",
    image: IMAGES.haut_greniere,
    tag: 'Classic'
  },
  {
    id: 'chartreuse',
    name: "Cuvée de la Chartreuse",
    appellation: "Lussac Saint-Émilion",
    type: 'Red',
    description: `Le parcellaire de cette cuvée est localisé autour de la maison familiale du domaine possédant une architecture de type chartreuse. Merlot, cabernet franc, cabernet sauvignon prennent racines dans un sol graveleux sur fond d’argiles bleues, unique, rare et prestigieux sur la rive droite bordelaise. Ces vignes de plus de 80 ans possèdent une génétique et un terroir exceptionnel à la réalisation de grands vins. Sont récoltés des grappes à petits grains relativement concentrés. L’élevage 100 % en fût de chêne révèle l’intensité et l’équilibre de ce vin, d’une grande garde.`,
    tastingNotes: `« Ce vin est d’une densité – d’une richesse impressionnante, d’un fruit succulent et de tanins suaves. Superbe vin de gastronomie. »`,
    production: "15 000 cols produites",
    critic: "Wine Enthusiast (2019)",
    score: "93/100",
    image: IMAGES.chartreuse,
    tag: 'Icon'
  },
  {
    id: 'esthete',
    name: "Esthète",
    appellation: "Lussac Saint-Émilion",
    type: 'Red',
    description: `C’est dans les années 2000 que Jean Pierre eut l’idée de sélectionner les meilleurs pieds de vigne de la propriété pour réaliser une cuvée unique, l’Esthète. Les raisins proviennent de la sélection inter et intra parcellaire des vignes de la cuvée de la Chartreuse, localisées sur un sol graveleux sur fond d’argiles bleues. Les 3 cépages sont vinifiés et élevés en barriques séparément pour révéler la pureté de chacun. Mise en bouteille uniquement les belles années. Grand vin de garde.`,
    tastingNotes: `« Couleur pourpre, encre. Nez sur le fruit noir mûr, moka et épices. Bouche intense, ample avec beaucoup de densité et une belle acidité. Vin d’un grand potentiel. »`,
    production: "2 000 cols produites",
    critic: "Andreas Larsson",
    score: "Meilleur Sommelier du Monde",
    image: IMAGES.esthete,
    tag: 'Icon'
  },
  {
    id: 'franc-pour-cent',
    name: "Franc Pour Cent",
    appellation: "Lussac Saint-Émilion",
    type: 'Red',
    description: `C’est en 2021 qu’Audren réalise une cuvée mono-cépage 100 % Cabernet Franc issue de notre prestigieuse parcelle des « Grandes Vignes ». Les raisins proviennent de vignes de plus de 80 ans enracinées sur un sol d’argiles denses et profondes. Ces baies sont vinifiées et élevées dans de vieux fûts de chêne afin d’exprimer la pureté de ce cépage. Vin de lieu produit sous l’envie du vigneron.`,
    tastingNotes: `« Couleur encre. Nez intense sur les fruits noirs, la violette, le graphite et le fruit frais. Bouche ronde, souple, sucrante, tanins relativement fins et élégants. Vin de gastronomie. »`,
    production: "900 cols produites",
    critic: "Audren Dubreuil",
    score: "Paroles du Vigneron",
    image: IMAGES.franc_pour_cent,
    tag: 'Innovation'
  },
  {
    id: 'oubliee',
    name: "L'Oubliée",
    appellation: "Vin de France",
    type: 'Red',
    description: `C’est dans les années 2000 que l’histoire de l’Oubliée prend racine, lorsque mes parents tombèrent sur un lopin de terre, cerné par la forêt. Cet endroit laissé de côté était pourtant rempli de fraîcheur et offrait un terroir adapté aux futurs changements climatiques qui s’annonçaient : il allait écrire la genèse de vins fins, aux fruits éclatants. Parcellaire de 1,82 hectares, 100 % merlot.`,
    tastingNotes: `« Couleur profonde. Nez intense sur les fruits rouges, des notes florales et méditerranéennes. La bouche souple aux tanins relativement fins offre une belle buvabilité dans sa jeunesse. »`,
    production: "9 000 cols produites",
    critic: "Audren Dubreuil",
    score: "Paroles du Vigneron",
    image: IMAGES.oubliee,
    tag: 'Innovation'
  },
  {
    id: 'parenthese-blanc',
    name: "Parenthèse Blanc de Noirs",
    appellation: "IGP Atlantique",
    type: 'White',
    description: `L’innovation bouscule les traditions avec l’arrivée de la Parenthèse Blanc de Noirs. Ce vin blanc est issu de raisins noirs et plus précisément d’une majorité de cabernet sauvignon et d’un soupçon de merlot. Seulement les premiers jus pressés sont conservés afin d’obtenir une aromatique atypique et une couleur d’une grande pureté. Vinifié/élevé sous bois.`,
    tastingNotes: `« Au nez on retrouve des notes de fruits jaunes et blancs, de fleur d’acacia, de pierre à fusil ainsi que des notes toastées. Entre tension et rondeur, la bouche est rafraîchissante avec une belle densité. »`,
    production: "3 000 cols produites",
    critic: "Audren Dubreuil",
    score: "Paroles du Vigneron",
    image: IMAGES.parenthese_blanc,
    tag: 'Innovation'
  },
  {
    id: 'parenthese-rose',
    name: "Parenthèse Rosé",
    appellation: "IGP Atlantique",
    type: 'Rose',
    description: `Dans la première dizaine des années 2000, Jean Pierre sentit le vent souffler de nouvelles couleurs. Le merlot et le cabernet sauvignon, à part égale, se mêlent à merveille lors de longues vinifications à basse température révélant des notes d’agrumes, de fruits jaunes et de bonbons anglais. La vendange est réalisée tôt le matin afin de presser des raisins frais.`,
    tastingNotes: `« Un nez délicat sur des notes de pêche, de pamplemousse mais aussi de bonbon. La bouche, assez rare pour un rosé, mêle rondeur et tension. »`,
    production: "2 500 cols produites",
    critic: "Jean-Pierre Dubreuil",
    score: "Paroles du Vigneron",
    image: IMAGES.parenthese_rose,
    tag: 'Innovation'
  },
  {
    id: 'greniere-classique',
    name: "Château de La Grenière",
    appellation: "Lussac Saint-Émilion",
    type: 'Red',
    description: `Le parcellaire du Château de La Grenière possède la surface la plus étendue du domaine avec une unicité rare dans la composante de son sol. Merlot, cabernet franc, cabernet sauvignon prennent racines dans un sol argilo-limoneux avec un sous-sol dominé par les argiles bleues, si précieuses dans la composante de fraîcheur des vins lors des millésimes chauds. Le terroir et l’élevage mi fût de chêne mi cuve révèlent un vin dense sur le fruit noir mûr, doté de notes de menthol et de tanins suaves.`,
    tastingNotes: `« Fruits noirs mûrs avec des notes de chocolat et de tabac. Bouquet juteux, frais, tanins crémeux et bouche veloutée. Douceur et persistance. »`,
    production: "30 000 cols produites",
    critic: "James Suckling (2022)",
    score: "91/100",
    image: IMAGES.greniere_classique,
    tag: 'Classic'
  }
];

export const TIMELINE: TimelineEvent[] = [
  { 
    year: "XVIIe", 
    title: "L'Ancrage Cistercien", 
    description: `Les moines de l'Abbaye de Faise, véritables 'ingénieurs du sol', identifient le potentiel unique de la croupe graveleuse de la Grenière. Le domaine devient leur fournisseur attitré, scellant une vocation viticole spirituelle et technique.`,
    image: IMAGES.moines
  },
  { 
    year: "1914", 
    title: "La Fondation Dubreuil", 
    description: `À l'aube de la Grande Guerre, la famille Dubreuil, alors métayers, mobilise ses économies pour racheter le domaine aux enchères. Un acte fondateur de résilience qui transforme des exploitants en propriétaires libres.`,
    image: IMAGES.famille 
  },
  { 
    year: "1956", 
    title: "La Reconstruction", 
    description: `Après le gel historique qui décime le vignoble bordelais, les 2ème et 3ème générations reconstruisent patiemment le vignoble, préservant les vieilles vignes qui ont survécu.`,
    image: IMAGES.esthete
  },
  { 
    year: "1986", 
    title: "La Vision de Jean-Pierre", 
    description: `Jean-Pierre Dubreuil (4ème génération) crée la Cuvée 'Chartreuse'. Il modernise l'outil de production, introduit les cuves béton et structure la commercialisation vers l'export.`,
    image: IMAGES.haut_greniere
  },
  { 
    year: "2010", 
    title: "La Précision d'Audren", 
    description: `Audren (5ème génération), œnologue, rejoint le domaine. Il initie la sélection parcellaire fine et crée 'Esthète', prouvant que Lussac peut produire des vins de garde exceptionnels.`,
    image: IMAGES.chartreuse
  },
  { 
    year: "2024", 
    title: "L'Avenir en Duo", 
    description: `Père et fils co-gèrent le domaine. Certification HVE 3, innovations 'Sans Soufre' et une ambition commune : inscrire la Grenière parmi les grands vins de la Rive Droite.`,
    image: IMAGES.jp_audren
  }
];