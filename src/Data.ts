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
  live: number; // ID unique de Live
  presenters: string[];
  begin: number; // Timestamp
  end: number; //Timestamp
}

const data: Data = {
  lives: [
    {
      id: 0,
      name: 'lorem ipsum',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      id: 1,
      name: 'lorem ipsum',
      video: 'https://www.youtube.com/embed/Q16KpquGsIc'
    }
  ],
  conferences: [
    {
      id: 0,
      name: 'name',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      live: 0,
      presenters: [
        'name',
        'name2',
      ],
      begin: 1606082400,
      end: 1606086000
    },
    {
      id: 1,
      name: 'name',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      live: 1,
      presenters: [
        'name',
        'name2',
      ],
      begin: 1607983200,
      end: 1607986800
    }
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
