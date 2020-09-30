import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Search from "../src/pages/search";
import Saved from "../src/pages/saved";
import Navbar from "../src/components/Navbar";
import SavedDataContext from "../src/utils/SavedDataContext";

export default function App() {

  const [savedData, setSavedData] = useState(false)

  return (
    <>
    <SavedDataContext.Provider value={[savedData, setSavedData]}>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/search" />
          </Route>
          <Route exact path="/search">
            <Search/>
          </Route>
          <Route exact path="/saved">
            <Saved/>
          </Route>
        </Switch>
      </Router>
    </SavedDataContext.Provider>
    </>
  );
}
