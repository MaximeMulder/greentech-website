import React from "react";
import {LiveData} from "./Data";

const LiveEntry = (props: LiveData) => (
  <React.Fragment>
    <iframe title={props.name} src={props.video} width="720" height="480"></iframe>
  </React.Fragment>
);

export default LiveEntry;
