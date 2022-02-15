import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Layout from "../components/layout/layout";

export const AppNavigator = () => {
  return (
    <>
        <Router>
          <Switch>
            <Route path="/" exact component={Layout} />
          </Switch>
        </Router>
    </>
  );
};
