import React from "react";
import {Link} from "react-router-dom";
import {LiveData} from "./Data";
import LiveEntry from "./LiveEntry";

interface LivesProps {
  lives: Array<LiveData>;
}

const Lives = (props: LivesProps) => (
  <React.Fragment>
    {props.lives.map(live => (
      <div key={live.id}>
        <Link key={live.id} to={"/lives/" + live.id}>Salle {live.id}</Link><br />
        <LiveEntry {...live} /> {/* TODO: only show the player on the selected room (based on URL) */}
      </div>
    ))}
  </React.Fragment>
);

export default Lives;
