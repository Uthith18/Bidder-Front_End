import React from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa"; // react icons from github io 
import logo from './bidder_logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='wrapper'>
            <img src={logo} alt="Bidder Logo" className="login-logo"/>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>


                <button type="submit">Login</button>

                <div className="register">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;