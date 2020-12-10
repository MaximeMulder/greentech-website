export interface Data {
  rooms: RoomData[];
  conferences: ConferenceData[];
}

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

const data: Data = {
  rooms: [
    {
      id: 0,
      name: 'Amphithéâtre',
      live: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      id: 1,
      name: 'Salle 1',
      live: 'https://www.youtube.com/embed/Q16KpquGsIc'
    },
    {
      id: 2,
      name: 'Salle 2',
      live: 'https://www.youtube.com/embed/Q16KpquGsIc'
    }
  ],
  conferences: [
    {
      id: 0,
      title: 'Pollution numérique',
      subtitle: 'subtitle',
      description: 'description',
      image: 'image url',
      presenters: [
        'Adrien Dossang',
        'Arthur Delamare',
        'Dorian Lecoeur',
        'Enzo Billis',
      ],
      room: 0,
      begin: 1609844400,
      end: 1609849800
    },
    {
      id: 1,
      title: 'Cloud computing',
      subtitle: 'subtitle',
      description: 'description',
      image: 'image url',
      presenters: [
        'Antoine Savalle',
        'Maxime Mulder',
        'Paul Brouet',
        'Pierre Hamel',
      ],
      room: 1,
      begin: 1609844400,
      end: 1609849800
    },
    {
      id: 2,
      title: 'Cybersécurité des smart city',
      subtitle: 'subtitle',
      description: 'description',
      image: 'image url',
      presenters: [
        'Julien Zolli',
        'Nicolas Van-hove',
      ],
      room: 2,
      begin: 1609853400,
      end: 1609855800
    },
    {
      id: 3,
      title: 'Fluidifier le trafic',
      subtitle: 'subtitle',
      description: 'description',
      image: 'image url',
      presenters: [
        'Kévin Huard',
        'Corentin Dragée',
      ],
      room: 2,
      begin: 1609855800,
      end: 1609858800
    },
    {
      id: 4,
      title: 'Télécommunications',
      subtitle: 'subtitle',
      description: 'description',
      image: 'image url',
      presenters: [
        'Victor Personnettaz',
        'Yanis Mercier',
      ],
      room: 1,
      begin: 1609855800,
      end: 1609858800
    },
    {
      id: 5,
      title: 'Énergies',
      subtitle: 'subtitle',
      description: 'description',
      image: 'image url',
      presenters: [
        'Paul Fontaine',
      ],
      room: 0,
      begin: 1609840800,
      end: 1609842600
    },
    {
      id: 6,
      title: 'Liberté des citoyens',
      subtitle: 'subtitle',
      description: 'description',
      image: 'image url',
      presenters: [
        'Etienne Jouvançon',
        'Jean-Marc Meschin',
        'Julien His',
        'Romain Jouatte',
      ],
      room: 2,
      begin: 1609844400,
      end: 1609849800
    },
    {
      id: 7,
      title: 'Fermes urbaines',
      subtitle: 'subtitle',
      description: 'description',
      image: 'image url',
      presenters: [
        'Baptiste Pimont',
        'Bryan Quatremare',
        'Elian Hamon',
      ],
      room: 0,
      begin: 1609837500,
      end: 1609840800
    },
    {
      id: 8,
      title: 'GreenIT au sein de la DSI',
      subtitle: 'subtitle',
      description: 'description',
      image: 'image url',
      presenters: [
        'Alexandre Dassonville',
        'Antonin Paul',
      ],
      room: 0,
      begin: 1609853400,
      end: 1609855800
    },
    {
      id: 9,
      title: 'Voitures autonomes',
      subtitle: 'subtitle',
      description: 'description',
      image: 'image url',
      presenters: [
        'Antoine Morlet',
      ],
      room: 2,
      begin: 1609840800,
      end: 1609842600
    },
    {
      id: 10,
      title: 'Gestion des flux',
      subtitle: 'subtitle',
      description: 'description',
      image: 'image url',
      presenters: [
        'Maximilien Fonteyn',
        'Virgile Marand',
        'Yoann Bernard',
      ],
      room: 1,
      begin: 1609837500,
      end: 1609840800
    },
    {
      id: 11,
      title: 'Smart harbor',
      subtitle: 'subtitle',
      description: 'description',
      image: 'image url',
      presenters: [
        'Gabriel Lesourd',
      ],
      room: 1,
      begin: 1609840800,
      end: 1609842600
    },
    {
      id: 12,
      title: 'Reconnaissance des iris',
      subtitle: 'subtitle',
      description: 'description',
      image: 'image url',
      presenters: [
        'Alaeddine Abdelkafi',
        'Amal Ayadi',
        'Mahdi Chaabouni',
      ],
      room: 2,
      begin: 1609837500,
      end: 1609840800
    },
    {
      id: 13,
      title: 'Propreté et durabilité',
      subtitle: 'subtitle',
      description: 'description',
      image: 'image url',
      presenters: [
        'Nils Montier',
      ],
      room: 1,
      begin: 1609853400,
      end: 1609854600
    },
    {
      id: 14,
      title: 'Smart buildings',
      subtitle: 'subtitle',
      description: 'description',
      image: 'image url',
      presenters: [
        'Célia Henry',
      ],
      room: 1,
      begin: 1609854600,
      end: 1609855800
    },
    {
      id: 15,
      title: 'La mobility-as-a-service',
      subtitle: 'subtitle',
      description: 'description',
      image: 'image url',
      presenters: [
        'Aurélien Pottier',
        'Clément Lesage',
      ],
      room: 0,
      begin: 1609855800,
      end: 1609858800
    },
  ]
};

export function getConference(id: number): ConferenceData {
  return data.conferences.find((conference) => conference.id === id);
}

export function getRoom(id: number): RoomData {
  return data.rooms.find((room) => room.id === id);
}

export function getConferenceRoom(conference: ConferenceData): RoomData {
  return data.rooms.find((room) => room.id === conference.room);
}

export function getRoomConferences(room: RoomData): ConferenceData[] {
  return data.conferences.filter((conference) => conference.room === room.id);
}

export default data;
