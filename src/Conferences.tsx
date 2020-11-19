import React from "react";
import ConferenceEntry from "./ConferenceEntry";

const Conferences = () => (
  <React.Fragment>
    {<ConferenceEntry room="Room 001" date="2016-01-04 10:34:23" name="conf" description="desc" authors={["a", "b", "c"]} />}
  </React.Fragment>
);

export default Conferences;
