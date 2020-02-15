import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route path="/about" component={Books} />
          <Route path="/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
