export interface RoomData {
  id: number;
  name: string;
}

export interface ConferenceData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  presenters: string[];
  room: number;
  url: string;
  begin: number;
  end: number;
}

const conferences = [
  {
    id: 0,
    title: 'Pollution numérique',
    subtitle: 'Découvrez comment améliorer votre empreinte numérique.',
    description: 'Présenter ce qu\'est la pollution numérique, les causes et ce qui contribue à la réduire.',
    presenters: [
      'Adrien Dossang',
      'Arthur Delamare',
      'Dorian Lecoeur',
      'Enzo Billis',
    ],
    room: 0,
    url: 'https://www.youtube.com/embed/O8924ALg9TE',
    begin: 1610100000,
    end: 1610105400
  },
  {
    id: 1,
    title: 'Cloud computing',
    subtitle: 'L\'utilisation du Cloud Computing dans la gestion de la ville.',
    description: 'L\'évolution continuelle des technologies numériques nous montre au quotidien que la ville de demain sera en grande partie, si ce n\'est entièrement, connectée. De nouveaux services numériques voient le jour, tandis que d\'autres bénéficient des avancées technologiques permettant d\'améliorer la qualité des services actuels. Les différentes applications du cloud computing illustrent parfaitement cet exemple. En effet, certains services du cloud d\'aujourd\'hui évoluent tandis que d\'autres essayent de faire leurs preuves comme c\'est le cas pour le cloud gaming. Notre objectif de recherche sera d\'étudier et tenter de prévoir l\'évolution de ces technologies. Nos travaux porteront donc sur le développement des technologies du cloud, leur adoption ainsi que les nouvelles branches du cloud qui selon nous pourraient émerger ces prochaines années dans le cas d\'une ville durable et/ou de l\'industrie 4.0.',
    presenters: [
      'Antoine Savalle',
      'Maxime Mulder',
      'Paul Brouet',
      'Pierre Hamel',
    ],
    room: 1,
    url: 'https://www.youtube.com/embed/zn_o-vys5YM',
    begin: 1610100000,
    end: 1610105400
  },
  {
    id: 2,
    title: 'Cybersécurité des smart city',
    subtitle: 'Les enjeux de sécurité impliqués par l\'évolution des technologies dans les villes.',
    description: 'Nous allons parler de la cybersécurité des Smart Cities d\'hier et d\'aujourd\'hui et allons donner nos prévisions pour les 5 années à venir.',
    presenters: [
      'Julien Zolli',
      'Nicolas Van-hove',
    ],
    room: 2,
    url: 'https://www.youtube.com/embed/xJu0EGYoki0',
    begin: 1610109000,
    end: 1610111700
  },
  {
    id: 3,
    title: 'Fluidifier le trafic',
    subtitle: 'L\'utilisation des nouvelles technologies pour optimiser le trafic.',
    description: 'La gestion des embouteillages est l\'un des enjeux principaux au sein des smart cities car il a un impact sur la réduction de la pollution atmosphérique et sonore. L\'IA et le Machine Learning peuvent être utilisés pour fluidifier le trafic, l\'IA accumule de nombreuses données sur le trafic puis les analyse afin de prendre une décision pour améliorer le trafic. Par exemple, l\'IA peut détecter des embouteillages sur une route et peut décider de dévier le trafic grâce aux feux de circulations.',
    presenters: [
      'Kévin Huard',
      'Corentin Dragée',
    ],
    room: 2,
    url: 'https://www.youtube.com/embed/L1FM8nROPpo',
    begin: 1610111700,
    end: 1610114400
  },
  {
    id: 4,
    title: 'Télécommunications',
    subtitle: 'Permettre un accès continu à internet dans toute la métropole.',
    description: 'Dans cette conférence nous aborderons le sujet de l\'accès à internet dans nos villes de demain. Premièrement, nous présenterons des problèmes soulevés par le manque d\'accès à internet en ville, puis des exemples de cas d\'utilisation possible grâce à la mise en place d\'un accès à internet dans la métropole. Ensuite, nous parlerons des technologies innovantes en rapport notre problématique. Pour conclure nous présenterons une étude de faisabilité de ce projet à l\'échelle d\'une métropole.',
    presenters: [
      'Victor Personnettaz',
      'Yanis Mercier',
    ],
    room: 1,
    url: 'https://www.youtube.com/embed/TW3-y_gkGbE',
    begin: 1610111700,
    end: 1610114400
  },
  {
    id: 5,
    title: 'Énergies',
    subtitle: 'CO² et réchauffement climatique : au pire on mettra des tee-shirts.',
    description: 'Conférence sur le thème du réchauffement climatique qui aura pour but de vous présenter quelques points intéressants du dernier rapport du GIEC!',
    presenters: [
      'Paul Fontaine',
    ],
    room: 0,
    url: 'https://www.youtube.com/embed/ofVIeTpgx68',
    begin: 1610096400,
    end: 1610098200
  },
  {
    id: 6,
    title: 'Liberté des citoyens',
    subtitle: 'Problèmes et protections de la vie privée dans la Smart City.',
    description: 'Nous étudierons la place de la vie privée dans la smart city. Quels sont les problèmes liés ? Quelles sont les lois qui protègent la vie prive aujourd\'hui ? Etude de cas de la Chine. Les solutions que nous proposons.',
    presenters: [
      'Etienne Jouvençon',
      'Jean-Marc Meschin',
      'Julien His',
      'Romain Jouatte',
    ],
    room: 2,
    url: 'https://www.youtube.com/embed/L3cbTYgE5Y0',
    begin: 1610100000,
    end: 1610105400
  },
  {
    id: 7,
    title: 'Fermes urbaines',
    subtitle: 'Présentation des fermes urbaines et de ses enjeux et innovations.',
    description: 'Notre conférence présentera le sujet des fermes urbaines, traitera de leur état ainsi que leur place dans la smart city et industrie 4.0. Nous commencerons sur un état de l\'art suivi de pistes d\'améliorations et les innovations.',
    presenters: [
      'Baptiste Pimont',
      'Bryan Quatremare',
      'Elian Hamon',
    ],
    room: 0,
    url: 'https://www.youtube.com/embed/tr9waww_blM',
    begin: 1610092800,
    end: 1610096400
  },
  {
    id: 8,
    title: 'GreenIT au sein de la DSI',
    subtitle: 'Présentation du concept et de ses bonnes pratiques.',
    description: 'Introduction au concept de l\'informatique durable. Présentation de bonnes pratiques en matière d\'informatique durable (matériel, hébergement, développement).',
    presenters: [
      'Alexandre Dassonville',
      'Antonin Paul',
    ],
    room: 0,
    url: 'https://www.youtube.com/embed/t1f3JCXqfJ8',
    begin: 1610109000,
    end: 1610111700
  },
  {
    id: 9,
    title: 'Voitures autonomes',
    subtitle: 'Les impacts de la voiture autonome sur la société de demain.',
    description: 'Partant du postulat que la voiture autonome fera partie du champ de l\'IOT (Internet of Things) et que l\'évolution de la MaaS (Mobility as a Service) mettra fin au rapport que nous avons avec nos voitures individuelles, nous sommes en droit de nous demander quels en seront l\'impact sur notre société et nos infrastructures ?',
    presenters: [
      'Antoine Morlet',
    ],
    room: 2,
    url: 'https://www.youtube.com/embed/nptCv0lEaXA',
    begin: 1610096400,
    end: 1610098200
  },
  {
    id: 10,
    title: 'Gestion des flux',
    subtitle: '',
    description: 'Voitures, piétons, transports en commun, services publics, électricité, eau : De nombreux flux parcourent nos villes en tout temps. Quelles sont les relations que la Smart City entretient avec ces flux ? Et surtout, par quels moyens peut-elle les fluidifier, aujourd\'hui et dans les années à l\'avenir ? Nous allons nous focaliser sur les flux de personnes dans cette conférence et nous nous efforcerons de répondre à ces questions sur l\'heure qui nous a été allouée.',
    presenters: [
      'Maximilien Fonteyn',
      'Virgile Marand',
      'Yoann Bernard',
    ],
    room: 1,
    url: 'https://www.youtube.com/embed/Zr8s3e49Yjk',
    begin: 1610092800,
    end: 1610096400
  },
  {
    id: 11,
    title: 'Smart harbor',
    subtitle: 'L\'utilisation des technologies numériques pour la gestion des ports maritimes.',
    description: 'Avec une augmentation constante du trafic maritime, les technologies numériques se sont imposées comme des solutions incontournables auprès des ports pour améliorer leurs compétitivités tout en respectant l\'environnement.',
    presenters: [
      'Gabriel Lesourd',
    ],
    room: 1,
    url: 'https://www.youtube.com/embed/rt1s_1KqROs',
    begin: 1610096400,
    end: 1610098200
  },
  {
    id: 12,
    title: 'Portefeuille numérique',
    subtitle: '',
    description: 'De nos jours, nos papiers personnels sont très importants dans notre vie quotidienne et surtout avec le confinement, la situation va être de plus en plus compliquée puisqu\'à chaque sortie, on doit être muni d\'une attestation de déplacement et un justificatif d\'identité. Notre solution est d\'informatiser toutes les cartes personnelles comme la carte d\'identité et la carte bancaire et réaliser un profil numérique qui contient toutes les coordonnés personnelles pour éliminer les cartes tangibles, alors on va réaliser un système de contrôle d\'accès biométrique qui se base sur la reconnaissance de l\'iris liée avec un système de reconnaissance faciale en 3D qui est liée directement avec le cloud. On va appliquer cette solution pour faire des paiements sans besoin d\'apporter une carte bancaire et même sans besoin de retenir des mots de passe, notre solution est un moyen pour faciliter le paiement n\'importe où (autoroute, caisse en magasin, pharmacie, etc….).',
    presenters: [
      'Alaeddine Abdelkafi',
      'Amal Ayadi',
      'Mahdi Chaabouni',
    ],
    room: 2,
    url: 'https://www.youtube.com/embed/tnjHe2KevF8',
    begin: 1610092800,
    end: 1610096400
  },
  {
    id: 13,
    title: 'Propreté et durabilité',
    subtitle: 'La gestion des déchets dans les villes.',
    description: 'Nous parlerons de la gestion intelligente des déchets au sein des smart cities, des technologies existantes, l\'évolution et l\'historique de celles-ci.',
    presenters: [
      'Nils Montier',
    ],
    room: 1,
    url: 'https://www.youtube.com/embed/ineF0sD2GSQ',
    begin: 1610109000,
    end: 1610109900
  },
  {
    id: 14,
    title: 'Smart buildings',
    subtitle: 'Les enjeux et les risques des Smart Buildings au sein de la Smart City.',
    description: 'Les Smart Buildings seront la base pour une transition vers les Smarts Cities. Il est donc important de comprendre les enjeux, autant écologiques qu\'économiques, des bâtiments des villes de demain, mais aussi les risques qui peuvent être engendrés par un développement de ces smart buildings.',
    presenters: [
      'Celia Henry',
    ],
    room: 1,
    url: 'https://www.youtube.com/embed/bUflWWyhSRM',
    begin: 1610109900,
    end: 1610111700
  },
  {
    id: 15,
    title: 'La mobility-as-a-service',
    subtitle: 'Découvrir le concept de mobility-as-a-service et ses implémentations.',
    description: 'Lors de notre conférence vous allez découvrir le sujet de la Mobility-as-a-service et son implémentation à l\'aide d\'exemples concrets ainsi que les futurs infrastructures et usages.',
    presenters: [
      'Aurélien Pottier',
      'Clément Lesage',
    ],
    room: 0,
    url: 'https://www.youtube.com/embed/AvuV5_xLseY',
    begin: 1610111700,
    end: 1610114400
  }
];

const rooms = [
  {
    id: 0,
    name: 'SALLE 1'
  },
  {
    id: 1,
    name: 'SALLE 2'
  },
  {
    id: 2,
    name: 'SALLE 3'
  }
];

export function getConferences(): ConferenceData[] {
  return conferences;
}

export function getRooms(): RoomData[] {
  return rooms;
}

export function getConference(id: number): ConferenceData {
  return conferences.find((conference) => conference.id === id);
}

export function getRoom(id: number): RoomData {
  return rooms.find((room) => room.id === id);
}

export function getConferenceRoom(conference: ConferenceData): RoomData {
  return rooms.find((room) => room.id === conference.room);
}

export function getRoomConferences(room: RoomData): ConferenceData[] {
  return conferences.filter((conference) => conference.room === room.id);
}
