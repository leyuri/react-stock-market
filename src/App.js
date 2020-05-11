import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { fetchCompanyList } from "./actions";
import { useDispatch } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';

import AboutPage from "./pages/AboutPage";
import HelpPage from "./pages/HelpPage";
import CompanyListPage from "./pages/CompanyListPage";
import MainPage from "./pages/MainPage";
import CompanyPage from "./pages/CompanyPage";

const useStyles = makeStyles((theme) => ({
  // theme라는게 넘어오면 테마에 기본적인 space들이 정해져 있다. 
  app: {
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    // 컴포넌트가 마운트 되면 할 수 있는 것
    dispatch(fetchCompanyList());
  })

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
            <Route path="/companies/:symbol">
              <CompanyPage />
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
