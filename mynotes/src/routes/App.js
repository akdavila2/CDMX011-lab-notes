import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
import { auth } from "../lib/firebase";

import Home from "../components/containers/home/Home";
import Login from "../components/containers/Login";
import SignUp from "../components/containers/SignUp";
import NotFound from "../components/containers/NotFound";

import { AuthProvider } from "../context/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthProvider
      auth={auth}
        signInWithEmailAndPassword={signInWithEmailAndPassword} 
        createUserWithEmailAndPassword={createUserWithEmailAndPassword}
        signOut={signOut}
        onAuthStateChanged={onAuthStateChanged}
        GoogleAuthProvider={GoogleAuthProvider}
        signInWithPopup={signInWithPopup}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <PrivateRoute exact path="/Home" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};
export default App;
