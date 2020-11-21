import React from "react";
import ConferenceEntry from "./ConferenceEntry";
import {ConferenceData} from "./Data";

const Conferences = (datas: Array<ConferenceData>) => datas.forEach(conference => (
  <React.Fragment>
    <ConferenceEntry {...conference} />
  </React.Fragment>)
);

export default Conferences;
