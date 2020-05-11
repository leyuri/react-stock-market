import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import AboutPage from "./pages/AboutPage";
import HelpPage from "./pages/HelpPage";
import CompanyListPage from "./pages/CompanyListPage";
import MainPage from "./pages/MainPage";

const useStyles = makeStyles((theme) => ({
  // theme라는게 넘어오면 테마에 기본적인 space들이 정해져 있다. 
  app: {
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
       <div className={classes.app}>
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
