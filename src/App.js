import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import HelpPage from "./pages/HelpPage";
import CompanyListPage from "./pages/CompanyListPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/list">
              <CompanyListPage />
            </Route>
            <Route path="/help">
              <HelpPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
