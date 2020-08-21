import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "../Routes/Main";
import Detail from "../Routes/Detail";

export default () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/posts/:id" component={Detail} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  </>
);
