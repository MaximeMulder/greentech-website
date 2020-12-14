export interface RoomData {
  id: number;
  name: string;
  live: string;
}

export interface ConferenceData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  presenters: string[];
  room: number;
  begin: number;
  end: number;
}

const conferences = [
  {
    id: 0,
    title: 'Pollution numérique',
    subtitle: 'Découvrez comment améliorer votre empreinte numérique.',
    description: 'Présenter ce qu\'est la pollution numérique, les causes et ce qui contribue à la réduire.',
    image: 'image url',
    presenters: [
      'Adrien Dossang',
      'Arthur Delamare',
      'Dorian Lecoeur',
      'Enzo Billis',
    ],
    room: 0,
    begin: 1609840800,
    end: 1609846200
  },
  {
    id: 1,
    title: 'Cloud computing',
    subtitle: 'L\'utilisation du Cloud Computing dans la gestion de la ville.',
    description: 'L\'évolution continuelle des technologies numériques nous montre au quotidien que la ville de demain sera en grande partie, si ce n\'est entièrement, connectée. De nouveaux services numériques voient le jour, tandis que d\'autres bénéficies des avancées technologiques permettant d\'améliorer la qualité des services actuels. Les différentes applications du cloud computing illustrent parfaitement cet exemple. En effet, certains services du cloud d\'aujourd\'hui évoluent tandis que d\'autres essayent de faire leurs preuves comme c\'est le cas pour le cloud gaming. Notre objectif de recherche sera d\'étudier et tenter de prévoir l\'évolution de ces technologies. Nos travaux porteront donc sur le développement des technologies du cloud, leur adoption ainsi que les nouvelles branches du cloud qui selon nous pourraient émerger ces prochaines années dans le cas d\'une ville durable et/ou de l\'industrie 4.0.',
    image: 'image url',
    presenters: [
      'Antoine Savalle',
      'Maxime Mulder',
      'Paul Brouet',
      'Pierre Hamel',
    ],
    room: 1,
    begin: 1609840800,
    end: 1609846200
  },
  {
    id: 2,
    title: 'Cybersécurité des smart city',
    subtitle: 'Les enjeux de sécurité impliqués par l\'évolution des technologies dans les villes.',
    description: 'Nous allons parler de la cybersécurité des Smart Cities hier, aujourd\'hui et allons donner nos prévisions pour les 5 années à venir',
    image: 'image url',
    presenters: [
      'Julien Zolli',
      'Nicolas Van-hove',
    ],
    room: 2,
    begin: 1609849800,
    end: 1609852200
  },
  {
    id: 3,
    title: 'Fluidifier le trafic',
    subtitle: 'L\'utilisation des nouvelles technologies pour optimiser le trafic.',
    description: 'La gestion des embouteillages est l\'un des enjeux principaux au sein des smart cities car il a un impact sur la réduction de la pollution atmosphérique et sonore. L\'IA et le Machine Learning peuvent être utilisé pour fluidifier le trafic, l\'IA accumule de nombreuses données sur le trafic puis les analysent afin de prendre une décision afin d\'améliorer le trafic. Par exemple, l\'IA peut détecter des embouteillages sur une route et peut décider de dévier le trafic grâce aux feux de circulations.',
    image: 'image url',
    presenters: [
      'Kévin Huard',
      'Corentin Dragée',
    ],
    room: 2,
    begin: 1609852200,
    end: 1609855200
  },
  {
    id: 4,
    title: 'Télécommunications',
    subtitle: 'Permettre un accès continu à internet dans toute la métropole.',
    description: 'Dans cette conférence nous aborderons le sujet de l\'accès à internet dans nos villes de demain. Premièrement, nous présenterons des problèmes soulevés par le manque d\'accès à internet en ville, puis des exemples de cas d\'utilisation possible grâce à la mise en place d\'un accès à internet dans la métropole. Ensuite, nous parlerons des technologies innovantes en rapport notre problématiques. Pour conclure nous présenterons une étude de faisabilité de ce projet a l\'échelle d\'une métropole.',
    image: 'image url',
    presenters: [
      'Victor Personnettaz',
      'Yanis Mercier',
    ],
    room: 1,
    begin: 1609852200,
    end: 1609855200
  },
  {
    id: 5,
    title: 'Énergies',
    subtitle: 'CO² et réchauffement climatique : au pire on mettra des tee shirts.',
    description: 'Conférence sur le thème du réchauffement climatique qui aura pour but de vous présenter quelques points intéressant du dernier rapport du GIEC!',
    image: 'image url',
    presenters: [
      'Paul Fontaine',
    ],
    room: 0,
    begin: 1609837200,
    end: 1609839000
  },
  {
    id: 6,
    title: 'Liberté des citoyens',
    subtitle: 'Problèmes et protections de la vie privée dans la Smart City.',
    description: 'Nous étudierons la place de la vie privée dans les smart city. Quels sont les problèmes liés. Quels sont les lois qui protège la vie prive aujourd\'hui. Etude de cas de la Chine. Les solutions que nous proposons.',
    image: 'image url',
    presenters: [
      'Etienne Jouvançon',
      'Jean-Marc Meschin',
      'Julien His',
      'Romain Jouatte',
    ],
    room: 2,
    begin: 1609840800,
    end: 1609846200
  },
  {
    id: 7,
    title: 'Fermes urbaines',
    subtitle: '',
    description: 'Notre conférence présentera le sujet des fermes urbaines, traitera de leur état ainsi que leur place dans la smart city et industrie 4.0. Nous commencerons sur un état de l\'art suivi de pistes d\'améliorations et les innovations.',
    image: 'image url',
    presenters: [
      'Baptiste Pimont',
      'Bryan Quatremare',
      'Elian Hamon',
    ],
    room: 0,
    begin: 1609833900,
    end: 1609837200
  },
  {
    id: 8,
    title: 'GreenIT au sein de la DSI',
    subtitle: 'Présentation du concept et de ses bonnes pratiques.',
    description: 'Introduction au concept de l\'informatique durable. Présentation de bonnes pratiques en matière d\'informatique durable (matériel, hébergement, développement).',
    image: 'image url',
    presenters: [
      'Alexandre Dassonville',
      'Antonin Paul',
    ],
    room: 0,
    begin: 1609849800,
    end: 1609852200
  },
  {
    id: 9,
    title: 'Voitures autonomes',
    subtitle: 'Les impacts de la voiture autonome sur la société de demain.',
    description: 'Partant du postulat que la voiture autonome fera partie du champs de l\'IOT (Internet of Things) et que l\'évolution du MaaS (Mobille as a Service) mettra fin au rapport qu\'on a avec nos voitures individuelles, on est en droit de se demander quels en seront l\'impact sur notre société et nos infrastructures ?',
    image: 'image url',
    presenters: [
      'Antoine Morlet',
    ],
    room: 2,
    begin: 1609837200,
    end: 1609839000
  },
  {
    id: 10,
    title: 'Gestion des flux',
    subtitle: '',
    description: 'Voitures, piétons, transports en commun, services publics, électricité, eau : De nombreux flux parcourent nos villes en tout temps. Quelles sont les relations que la Smart City entretient avec ces flux ? Et surtout, par quels moyens peut-elle les fluidifier, aujourd\'hui et dans les années à l\'avenir ? Nous nous efforcerons de répondre à ces questions sur l\'heure qui nous a été allouée.',
    image: 'image url',
    presenters: [
      'Maximilien Fonteyn',
      'Virgile Marand',
      'Yoann Bernard',
    ],
    room: 1,
    begin: 1609833900,
    end: 1609837200
  },
  {
    id: 11,
    title: 'Smart harbor',
    subtitle: 'L\'utilisation des technologies numériques pour la gestion des ports maritimes.',
    description: 'Avec une augmentation constante du trafic maritime, les technologies numériques se sont imposées comme des solutions incontournables auprès des ports pour améliorer leurs compétitivités tout en respectant l\'environnement.',
    image: 'image url',
    presenters: [
      'Gabriel Lesourd',
    ],
    room: 1,
    begin: 1609837200,
    end: 1609839000
  },
  {
    id: 12,
    title: 'Portefeuille numérique',
    subtitle: '',
    description: 'De nos jours, nos papiers personnels sont très importants dans notre vie quotidienne et surtout avec le confinement, la situation va être de plus en plus compliquée puisque à chaque sorti, on doit être muni d\'une attestation de déplacement et un justificatif d\'identité. Note solution est d\'informatiser tous les cartes personnelles comme la carte d\'identité et la carte bancaire et réaliser un profile numérique qui contiens tous les coordonnés personnelles pour éliminer les carte tangible, alors on va réaliser un système de contrôle d\'accès biométrique qui se base sur la reconnaissance de l\'iris liées avec un système de reconnaissance faciale en 3D qui est liée directement avec le cloud. On va appliquer cette solution pour faire des paiement sans besoin d\'apporter une carte bancaire et même sans besoin de retenir des mot de passe, notre solution est un moyen pour facilité le paiement n\'importe ou (autoroute, caisse en magasin, pharmacie etc….)',
    image: 'image url',
    presenters: [
      'Alaeddine Abdelkafi',
      'Amal Ayadi',
      'Mahdi Chaabouni',
    ],
    room: 2,
    begin: 1609833900,
    end: 1609837200
  },
  {
    id: 13,
    title: 'Propreté et durabilité',
    subtitle: 'La gestion des déchets dans les villes.',
    description: 'Nous parlerons de la gestion intelligente des déchets au seins des smart city, des technologies existantes, l\'évolution et l\'historique de celle-ci.',
    image: 'image url',
    presenters: [
      'Nils Montier',
    ],
    room: 1,
    begin: 1609849800,
    end: 1609851000
  },
  {
    id: 14,
    title: 'Smart buildings',
    subtitle: 'Les enjeux et les risques des Smart Buildings au sein de la Smart City.',
    description: 'Les Smart Buildings seront la base pour une transition vers les Smarts Cities. Il est donc important de comprendre les enjeux, autant écologique qu\'économique, des bâtiments des villes de demain, mais aussi les risques qui peuvent être engendrés par un développement de ces smart buildings.',
    image: 'image url',
    presenters: [
      'Celia Henry',
    ],
    room: 1,
    begin: 1609851000,
    end: 1609852200
  },
  {
    id: 15,
    title: 'La mobility-as-a-service',
    subtitle: 'Découvrir le concept de mobility-as-a-service et ses implémentations.',
    description: 'Lors de notre conférence vous allez découvrir le sujet de la Mobility-as-a-service et son implémentation à l\'aide d\'exemples concrets ainsi que les futurs infrastructures et usages.',
    image: 'image url',
    presenters: [
      'Aurélien Pottier',
      'Clément Lesage',
    ],
    room: 0,
    begin: 1609852200,
    end: 1609855200
  },
];

const rooms = [
  {
    id: 0,
    name: 'AMPHITHEATRE',
    live: 'https://www.youtube.com/embed/0000000000'
  },
  {
    id: 1,
    name: 'SALLE 1',
    live: 'https://www.youtube.com/embed/0000000000'
  },
  {
    id: 2,
    name: 'SALLE 2',
    live: 'https://www.youtube.com/embed/0000000000'
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
