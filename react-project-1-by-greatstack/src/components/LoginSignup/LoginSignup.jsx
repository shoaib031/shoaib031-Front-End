import React, { useState } from 'react'
import './LoginSignup.css'

import personImage from '../Assets/person.png';
import emailImage from '../Assets/email.png';
import passwordImage from '../Assets/password.png';


const LoginSignup = () => {

    const [action, setAction] = useState("Login")
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <img src={personImage} alt="" />
                    <input type="text" placeholder="Name" />
                </div>}

                <div className="input">
                    <img src={emailImage} alt="" />
                    <input type="email" placeholder="Email Id" />
                </div>
                <div className="input">
                    <img src={passwordImage} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            <div className="forgot-password">Lost Password?<span>Click Here!</span></div>
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sing Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    )
}

export default LoginSignup