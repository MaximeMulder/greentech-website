import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Data} from "./Data";
import Header from "./Header";
import Presentation from "./Presentation";
import Conferences from "./Conferences";
import Planning from "./Planning";
import Lives from "./Lives";

const data: Data = require("./data.json");

const App = () => (
  <Router>
    <Header />
    <h1>GreenTech Rouen 2020</h1>
    <Switch>
      <Route exact path="/" component={Presentation} />
      <Route path="/conferences" component={Conferences(data.conferences)} />
      <Route path="/planning" component={Planning} />
      <Route path="/lives" component={Lives(data.lives)} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
