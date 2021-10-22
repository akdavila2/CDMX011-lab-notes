import React, { useState } from "react";
import "../../scss/pages/_app.scss";
import "../../scss/pages/_Login.scss";

const FormLogin = () => {
  const [state, setState] = useState({});

  const handleEmail = (e) => setState({ ...state, email: e.target.value });
  const handlePassword = (e) =>
    setState({ ...state, password: e.target.value });

  const { email, password, error } = state;

  const attrs = {};

  if (!email || !password) attrs.disabled = true;

  return (
    <>
      <input type="email" placeholder="Email" onChange={handleEmail} />
      <input type="password" placeholder="Password" onChange={handlePassword} />
      <div className="error__section">{error}</div>
      <button {...attrs} className="primary-button" type="submit">
        Login
      </button>
    </>
  );
};
export default FormLogin;
