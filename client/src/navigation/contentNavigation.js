import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Layout from "../components/layout/layout";
import { RegisterForm } from '../components/header/auth/register'
import { LoginForm } from '../components/header/auth/login'
import { useSelector } from "react-redux";
import CreateProduct from "../components/layout/admin/createProduct";

export const ContentNavigation = () => {


  const authReducer = useSelector(state => state.user)
  return (
    <>
        <Router>
          <Switch>
          </Switch>
        </Router>
    </>
  );
};
