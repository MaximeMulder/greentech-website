import React from "react";
import { Route, Switch } from "react-router-dom";
import {Link} from "react-router-dom";
import {LiveData} from "./Data";
import LiveEntry from "./LiveEntry";

interface LivesProps {
  lives: Array<LiveData>;
}

const Lives = (props: LivesProps) => (
  <React.Fragment>
    {props.lives.map(live => (
      <React.Fragment key={live.id}>
        <Link to={"/lives/" + live.id}>Salle {live.id}</Link><br />
      </React.Fragment>
    ))}
    <Switch>
      {props.lives.map(live => (
        <Route key={live.id} path={"/lives/" + live.id}>
          <LiveEntry {...{live}} />
        </Route>
      ))}
      <Route path="/lives">
        <LiveEntry live={props.lives[0]} />
      </Route>
    </Switch>
  </React.Fragment>
);

export default Lives;
