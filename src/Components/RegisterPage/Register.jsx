import { Link } from "react-router-dom";
import React from 'react';
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';
import jQuery from 'jquery';

function Register(){
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState();
  const recaptchaRef = React.useRef();
  const validEmail = String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  const validPassword = String(password).toLowerCase().match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)

  async function handleRegister(e) {
    e.preventDefault()
  }
  const verifyCallback = (recaptchaToken) => {
    setRecaptchaToken(recaptchaToken);
  };

return <>
<main className="main-content">
<div className="container">
    <div className="login-item">
        <div className="logo-item py-4">
            <div className="d-flex justify-content-center text-center">
                <img src="/logo.png" alt="logo" className="logo-main"/>
            </div>
        </div>
        <div className="login-card-form">
            <h4 className="main-title py-4">
                Register
            </h4>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                     <input className="form-control" placeholder="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                <div className="form-group">
                        <input className="form-control" placeholder="Email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control"  
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <ReCAPTCHA 
                        ref={recaptchaRef}
                        size="normal"
                        theme="dark"
                        sitekey="6Lem5_cdAAAAAOGTlGUTApVlelyg9wi_XT3H92db"
                        onChange={verifyCallback}>
                        </ReCAPTCHA>
                     </div>
                <div className="form-group">
                    <button className="btn btn-main btn-lg w-100" type="submit">Sign Up</button>
                </div>
            </form>
            <div className="text-left my-4">
                <div>Already have an account? 
                
                 <a href="/login" className="fw-bold text-primary" > Login</a>
                
                </div>
            </div>
        </div>
    </div>
</div>
</main>
</>
}
export default Register;