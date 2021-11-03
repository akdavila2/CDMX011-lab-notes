import React, {useState} from "react";
import logo from '../../assets/Logo200x100px.png'
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";
import Footer from "./Footer";

const SignUp = () => {

    const {register} = useAuth();
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleConfirmPassword = (e) => setConfirmPassword(e.target.value)
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setTimeout(() => setError(''), 1500);
        }
        else {
            try {
                await register(email, password);
                history.push('/Home');
            }
            catch (error) {
                setError('Wrong Credentials');
                setTimeout(() => setError(''), 1500);
            }
        }
    }

    const attrs = {};

    if (!email || !password) attrs.disabled = true;

    return (
        <div>
            <div className="container__Login">
                <div>
                     <Link className='logo' to="/"> 
                    <img src={logo} alt="logoMyNote"/>
                     </Link> 
                </div>
                <div className="login__form">
                    <form onSubmit={handleSubmit} className="form">
                        <input type="email" placeholder="Email" onChange={handleEmail}/>
                        <input type="password" placeholder="Password" onChange={handlePassword}/>
                        <input type="password" placeholder="Confirm Password" onChange={handleConfirmPassword}/>
                        <div className="error__section">{error}</div>
                        <button 
                        {...attrs}
                        className="primary-button">SignUp</button>
                    </form>
                </div>
            </div>
            <div>
               <Footer />
            </div>
        </div>
    );
};
export default SignUp;
