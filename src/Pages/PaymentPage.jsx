import React from 'react';
import './PaymentPage.css';
import logo from './bidder_logo.png';
import cardLogo from './cards.png';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
    return (
        <div className='wrapper'>
            <img src={logo} alt="Bidder Logo" className="login-logo"/>
            <form action="">
                <h1>Payment</h1>

                <div className="cards-accepted">
                <span>Cards Accepted: </span>
                <img src={cardLogo} alt="Visa" />
                </div>

                
                <div className="input-box">
                    <input type="text" placeholder='Name On Card' required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Credit Card Number' required />
                </div>

                <div className="input-box">
                     <input type="text" placeholder='Exp Month' required />
                </div>
                <div className="exp-cvv-container">
                        <div className="input-box exp-year">
                          <input type="text" placeholder='Exp Year' required />
                </div>
                    <div className="input-box cvv">
                     <input type="text" placeholder='CVV' required />
                </div>
                </div>
                <button type="submit">Confirm Payment</button>
            </form>
        </div>
    );
};

export default PaymentPage;