interface LiveData {
  id: bigint;
  name: string;
  video: string;
}

interface ConferenceData {
  name: string;
  subtitle: string;
  image: string;
  description: string;
  room: string;
  live: bigint; // ID unique de Live
  presenters: Array<[string, string]>;
  begin: bigint; // Timestamp
  end: bigint; //Timestamp
}

interface Data {
  lives: Array<LiveData>;
  conferences: Array<ConferenceData>;
}

export {Data, ConferenceData, LiveData};