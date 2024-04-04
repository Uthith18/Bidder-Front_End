import React from 'react';
import './Register.css';
import { FaUser, FaLock, FaHome, FaCity } from "react-icons/fa"; // react icons from github io 
import { MdEmail } from "react-icons/md";
import { BsPostage } from "react-icons/bs";
import { SiYourtraveldottv } from "react-icons/si";
import { Link } from 'react-router-dom';


const Register = () => {
    return (

        /*

    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
    country: "",
    city: "",
    postalCode: "",
    streetAddress: "",
    streetNumber: "",
        */
        <div className='wrapper'>
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder='Enter Username' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Enter Email' required />
                    <MdEmail className='icon' />
                </div>

                <div className="input-box">
                    <input type="text" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <div className="input-box">
                    <input type="text" placeholder='Enter First Name' required />
                    <FaUser className='icon' />
                </div>

                <div className="input-box">
                    <input type="text" placeholder='Enter Last Name' required />
                    <FaUser className='icon' />
                </div>

                <div className="input-box">
                    <input type="text" placeholder='Enter Country' required />
                    <SiYourtraveldottv className='icon' />
                </div>

                <div className="input-box">
                    <input type="text" placeholder='Enter City' required />
                    <FaCity className='icon' />
                </div>

                <div className="input-box">
                    <input type="text" placeholder='Enter Postal Code' required />
                    <BsPostage className='icon'/>
                </div>

                <div className="input-box">
                    <input type="text" placeholder='Enter Street Address' required />
                    <FaHome className='icon' />
                </div>

                <div className="input-box">
                    <input type="text" placeholder='Enter Street Number' required />
                    <FaHome className='icon' />
                </div>

                <div className="role">
                    <select required>
                        <option value="">Select Role</option>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                </div>



                <button type="Submit">Create Account</button>

                <div className="register">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;