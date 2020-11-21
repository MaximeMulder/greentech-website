import React from "react";
import ConferenceEntry from "./ConferenceEntry";
import {ConferenceData} from "./Data";

interface ConferencesProps {
  conferences: Array<ConferenceData>;
}

const Conferences = (props: ConferencesProps) => (
  <React.Fragment>
    {props.conferences.map(conference => (
      <ConferenceEntry {...conference} />
    ))}
  </React.Fragment>
);

export default Conferences;
