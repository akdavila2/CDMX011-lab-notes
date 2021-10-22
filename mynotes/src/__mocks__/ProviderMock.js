import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router";
import { AuthProvider } from "../context/AuthContext";

const ProviderMock = (props) => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route component={props.component} />
        </Switch>
      </AuthProvider>
    </Router>

  );
};

export default ProviderMock;
