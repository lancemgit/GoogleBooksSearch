import React from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/saved" component={Saved} />
          <Route component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
