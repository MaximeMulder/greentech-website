const data: Data = {
  lives: [
    {
      id: 1,
      name: 'lorem ipsum',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      id: 2,
      name: 'lorem ipsum',
      video: 'https://www.youtube.com/embed/Q16KpquGsIc'
    }
  ],
  conferences: [
    {
      id: 1,
      name: 'name',
      room: 'room',
      subtitle: 'subtitle',
      image: 'image url',
      description: 'description',
      live: 1,
      presenters: [
        [
          'name',
          'image'
        ],
        [
          'name2',
          'image2'
        ]
      ],
      begin: 1606082400,
      end: 1606086000
    },
    {
      id: 2,
      name: 'name',
      room: 'room',
      subtitle: 'subtitle',
      image: 'image url',
      description: 'description',
      live: 1,
      presenters: [
        [
          'name',
          'image'
        ],
        [
          'name2',
          'image2'
        ]
      ],
      begin: 1607983200,
      end: 1607986800
    }
  ]
};

interface LiveData {
  id: number;
  name: string;
  video: string;
}

interface ConferenceData {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  description: string;
  room: string;
  live: number; // ID unique de Live
  presenters: Array<[string, string]>;
  begin: number; // Timestamp
  end: number; //Timestamp
}

interface Data {
  lives: Array<LiveData>;
  conferences: Array<ConferenceData>;
}

export default data;
export { Data, ConferenceData, LiveData };
