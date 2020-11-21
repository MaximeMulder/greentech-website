const data: Data = {
  lives: [
    {
      id: 1,
      name: "lorem ipsum",
      video: "blbl.mp4"
    }
  ],
  conferences: [
    {
      id: 1,
      name: "name",
      room: "room",
      subtitle: "subtitle",
      image: "image url",
      description: "description",
      live: 1,
      presenters: [
        [
          "name",
          "image"
        ],
        [
          "name2",
          "image2"
        ]
      ],
      begin: 12345,
      end: 12345
    },
    {
      id: 2,
      name: "name",
      room: "room",
      subtitle: "subtitle",
      image: "image url",
      description: "description",
      live: 1,
      presenters: [
        [
          "name",
          "image"
        ],
        [
          "name2",
          "image2"
        ]
      ],
      begin: 12345,
      end: 12345
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
export {Data, ConferenceData, LiveData};