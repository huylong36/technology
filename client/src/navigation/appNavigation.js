import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Layout from "../components/layout/layout";
import { RegisterForm } from '../components/header/auth/register'
import { LoginForm } from '../components/header/auth/login'

export const AppNavigator = () => {
  return (
    <>
        <Router>
          <Switch>
            <Route path="/" exact component={Layout} />
            <Route path="/register" exact component={RegisterForm} />
            <Route path="/login" exact component={LoginForm} />
          </Switch>
        </Router>
    </>
  );
};
