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
  lives: [ // = rooms
    {
      id: 0,
      name: 'Room 1',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      id: 1,
      name: 'Room 2',
      video: 'https://www.youtube.com/embed/Q16KpquGsIc'
    },
    {
      id: 2,
      name: 'Room 3',
      video: 'https://www.youtube.com/embed/Q16KpquGsIc'
    }
  ],
  conferences: [
    {
      id: 0,
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'image url',
      subtitle: 'subtitle',
      description: 'description',
      live: 0,
      presenters: [
        'name',
        'name2',
      ],
      begin: 1606748400,
      end: 1606752000
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
      begin: 1606726800,
      end: 1606730400
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
