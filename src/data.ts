export interface Data {
  lives: LiveData[];
  conferences: ConferenceData[];
}

export interface LiveData {
  id: number;
  name: string;
  video: string;
}

export interface ConferenceData {
  id: number;
  name: string;
  image: string;
  subtitle: string;
  description: string;
  presenters: string[];
  live: number;
  begin: number;
  end: number;
}

const data: Data = {
  lives: [
    {
      id: 0,
      name: 'Amphithéâtre',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      id: 1,
      name: 'Salle 1',
      video: 'https://www.youtube.com/embed/Q16KpquGsIc'
    },
    {
      id: 2,
      name: 'Salle 2',
      video: 'https://www.youtube.com/embed/Q16KpquGsIc'
    }
  ],
  conferences: [
    {
      id: 0,
      name: 'Pollution numérique',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      presenters: [
        'Adrien Dossang',
        'Arthur Delamare',
        'Dorian Lecoeur',
        'Enzo Billis',
      ],
      live: 0,
      begin: 1606748400,
      end: 1606752000
    },
    {
      id: 1,
      name: 'Cloud computing',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      presenters: [
        'Antoine Savalle',
        'Maxime Mulder',
        'Paul Brouet',
        'Pierre Hamel',
      ],
      live: 1,
      begin: 1606726800,
      end: 1606730400
    },
    {
      id: 2,
      name: 'Cybersécurité des smart city',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      presenters: [
        'Julien Zolli',
        'Nicolas Van-hove',
      ],
      live: 1,
      begin: 1606726800,
      end: 1606730400
    },
    {
      id: 3,
      name: 'Fluidifier le trafic',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      presenters: [
        'Kévin Huard',
        'Corentin Dragée',
      ],
      live: 1,
      begin: 1606726800,
      end: 1606730400
    },
    {
      id: 4,
      name: 'Télécommunications',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      presenters: [
        'Victor Personnettaz',
        'Yanis Mercier',
      ],
      live: 1,
      begin: 1606726800,
      end: 1606730400
    },
    {
      id: 5,
      name: 'Énergies',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      presenters: [
        'Paul Fontaine',
      ],
      live: 1,
      begin: 1606726800,
      end: 1606730400
    },
    {
      id: 6,
      name: 'Liberté des citoyens',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      presenters: [
        'Etienne Jouvançon',
        'Jean-Marc Meschin',
        'Julien His',
        'Romain Jouatte',
      ],
      live: 1,
      begin: 1606726800,
      end: 1606730400
    },
    {
      id: 7,
      name: 'Fermes urbaines',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      presenters: [
        'Baptiste Pimont',
        'Bryan Quatremare',
        'Elian Hamon',
      ],
      live: 1,
      begin: 1606726800,
      end: 1606730400
    },
    {
      id: 8,
      name: 'GreenIT au sein de la DSI',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      presenters: [
        'Alexandre Dassonville',
        'Antonin Paul',
      ],
      live: 1,
      begin: 1606726800,
      end: 1606730400
    },
    {
      id: 9,
      name: 'Voitures autonomes',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      presenters: [
        'Antoine Morlet',
      ],
      live: 1,
      begin: 1606726800,
      end: 1606730400
    },
    {
      id: 10,
      name: 'Gestion des flux',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      presenters: [
        'Maximilien Fonteyn',
        'Virgile Marand',
        'Yoann Bernard',
      ],
      live: 1,
      begin: 1606726800,
      end: 1606730400
    },
    {
      id: 11,
      name: 'Smart harbor',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      presenters: [
        'Gabriel Lesourd',
      ],
      live: 1,
      begin: 1606726800,
      end: 1606730400
    },
    {
      id: 12,
      name: 'Reconnaissance des iris',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      presenters: [
        'Alaeddine Abdelkafi',
        'Amal Ayadi',
        'Mahdi Chaabouni',
      ],
      live: 1,
      begin: 1606726800,
      end: 1606730400
    },
    {
      id: 13,
      name: 'Propreté et durabilité',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      presenters: [
        'Nils Montier',
      ],
      live: 1,
      begin: 1606726800,
      end: 1606730400
    },
    {
      id: 14,
      name: 'Smart buildings',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      presenters: [
        'Célia Henry',
      ],
      live: 1,
      begin: 1606726800,
      end: 1606730400
    },
    {
      id: 15,
      name: 'La conférence d\'Orel et Clem',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      presenters: [
        'Aurélien Pottier',
        'Clément Lesage',
      ],
      live: 1,
      begin: 1606726800,
      end: 1606730400
    },
  ]
};

export function getConference(id: number): ConferenceData {
  return data.conferences.find((conference) => conference.id === id);
}

export function getLive(id: number): LiveData {
  return data.lives.find((live) => live.id === id);
}

export function getConferenceLive(conference: ConferenceData): LiveData {
  return data.lives.find((live) => live.id === conference.live);
}

export function getLiveConferences(live: LiveData): ConferenceData[] {
  return data.conferences.filter((conference) => conference.live === live.id);
}

export default data;
