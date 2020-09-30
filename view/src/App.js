import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Search from "../src/pages/search";
import Saved from "../src/pages/saved";
import Navbar from "../src/components/Navbar";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/search">
          <Search/>
        </Route>
        <Route path="/saved">
          <Saved/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}


export default App;
