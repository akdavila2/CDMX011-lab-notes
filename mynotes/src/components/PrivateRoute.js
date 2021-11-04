import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// operador rest
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
    const render= (props) => {
    const Control= currentUser ? Component : Redirect;
    if(!currentUser){
      props= {to:'/'}
    }
    return <Control {...props} />;
  }
  return (  <Route  {...rest} render={render} />  );
};
