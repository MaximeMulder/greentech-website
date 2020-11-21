import React from "react";
import {ConferenceData} from "./Data";

const ConferenceEntry = (props: ConferenceData) => (
  <React.Fragment>
    <div>
      {props.room}
      {props.begin}
    </div>
    <div>
      <h3>{props.name}</h3>
      {props.description}<br />
      {props.presenters.map((presenter) => presenter[0]).join(" - ")}
    </div>
  </React.Fragment>
);

export default ConferenceEntry;
