import React, { Component } from "react";
import { FormValidation } from "./FormValidation";
import Logo from "../../Assets/logo.png";
import api from "./../../api";
import { LOGIN } from "../../redux/auth/actionTypes";
import "./Form.css";
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

function Form(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState();
  const recaptchaRef = React.useRef();
  const validEmail = String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  
  async function handleLogin(e){

  };

  const verifyCallback = (recaptchaToken) => {
    setRecaptchaToken(recaptchaToken);
  };

  return(
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
    Login
    </h4>
    <form onSubmit={handleLogin}>
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
    <button className="btn btn-main btn-lg w-100" type="submit">Sign In</button>
    </div>
    </form>
    <div className="text-left my-4">
    <div className="mb-1">
    <Link href={{ pathname: '/forgotPassword' }}> 
    <a className="register">Forgot password?</a>
    </Link>
    </div>
    <div className="dont">
    Don't have an account? 
    <Link href={{ pathname: '/register' }}> 
    <a className="register"> Register Here</a>
    </Link>
    </div>
    </div>
    </div>
    </div>
    </div>
    </main>)
  }
  export default Form;