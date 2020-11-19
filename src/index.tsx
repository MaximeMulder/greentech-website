import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./Header";
import Presentation from "./Presentation";
import Conferences from "./Conferences";
import Planning from "./Planning";
import Lives from "./Lives";

const App = () => (
  <Router>
    <Header />
    <h1>GreenTech Rouen 2020</h1>
    <Switch>
      <Route exact path="/" component={Presentation} />
      <Route path="/conferences" component={Conferences} />
      <Route path="/planning" component={Planning} />
      <Route path="/lives" component={Lives} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
