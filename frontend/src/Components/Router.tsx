import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "../Routes/Main";
import Detail from "../Routes/Detail";

export default () => (
  <>
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/:id" component={Detail} />
    </Router>
  </>
);
