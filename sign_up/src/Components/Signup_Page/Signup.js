import React, { useState } from "react";
import "./Signup.css";
import user from '../Assets/Account.png';
import emailicon from '../Assets/email.png';
import psw from '../Assets/psw.png';
import eyefill from '../Assets/EyeFill.png';
import axios from 'axios';

const Signup = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmPassword,setConfirmpassword] = useState();

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('https://new-signup-page-api.vercel.app/signup',{name, email, password, confirmPassword})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <div className="header">Signup</div>
            <form onSubmit={handleSubmit}>
                <div className="text">
                    <div className="inputs">
                        {/* for user name */}
                        <div className="input">
                            <img src={user} alt='' style={{ width: '30px', height: '35px' }}/>
                            <input type="text" 
                            placeholder="Full Name" required
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        {/* for user email */}
                        <div className="input">
                            <img src={emailicon} alt='' style={{ width: '51px', height: '33px' }}/>
                            <input type="email" 
                            placeholder="Email ID" required
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {/* for user password */}
                        <div className="input">
                            <img src={psw} alt='' style={{ width: '48px', height: '27px' }}/>
                            <input type="password" 
                            placeholder="Create a Password" required
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {/* for user confirm-password */}
                        <div className="input">
                            <img src={eyefill} alt='' style={{ width: '33px', height: '33px' }}/>
                            <input type="password" 
                            placeholder="Confirm Password" required
                            onChange={(e) => setConfirmpassword(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="submit-container">
                      <button type="submit" className="signup-button">
                        Signup
                       </button>
                   
                      <p className="login-link">
                        Already have an Account? <a href="/login">Login</a>
                       </p>
                    </div>       
                </div>
            </form>
        </div>
    )
}

export default Signup;