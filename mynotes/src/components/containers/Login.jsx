/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../scss/pages/_app.scss";
import "../../scss/pages/_Login.scss";
import logo from '../../assets/Logo200x100px.png'
import iconGoogle from "../../assets/iconGoogle.png";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../lib/firebase";
import Footer from "./Footer";
import LoginForm from "../containers/LoginForm";

const Login = () => {
  const { login, loginGoogle, currentUser } = useAuth();
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async ( email, password) => {
  
    const user = auth.currentUser;
    if (user) {
      history.push("/Home");
    } else {
      try {
        await login(email, password);
        history.push("/Home");
      } catch (error) {
        setError("Wrong Credentials");
        setTimeout(() => setError(''), 1500);
      }
    }
  };
  const handleGoogle = async e => {
    e.preventDefault();
    try {
      await loginGoogle();
      history.push("/Home");
    } catch (error) {
      console.error(error);
      setError("Wrong Credentials");
    
    }
  };
  return (
    <div className="content">
      <div className="container__Login">
        <header className="logo">
          <img src={logo} alt="logoMyNote" />
        </header>
        <div className="login__form">
          <LoginForm handleSubmit={handleSubmit} />
          <div className="error__section">{error}</div>
          <div className="login-google">
            <img src={iconGoogle} alt="logo google" className="icon" />
            <Link to="/Home" onClick={handleGoogle}>
              Login with Google
            </Link>
          </div>
          <div className="link-signUp">
            <section className="link-signUp">
              <p className="text-signUp">You do not have an account?</p>
              <Link to="/SignUp"> Sign up</Link>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
