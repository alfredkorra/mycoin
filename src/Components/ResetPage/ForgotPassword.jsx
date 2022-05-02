import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../LoginPage/Login";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const validEmail = String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    
    async function handleLogin(e) {}
    
    return (
      <main className="main-content">
      <div className="container">
      <div className="login-item">
      <div className="logo-item py-4">
      <div className="d-flex justify-content-center text-center">
      <img src="/logo.png" alt="logo" className="logo-main" />
      </div>
      </div>
      <div className="login-card-form">
      <h4 className="main-title py-4">Reset Password</h4>
      <form onSubmit={handleLogin}>
      <div className="form-group">
      <input
      className="form-control"
      placeholder="Email"
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div className="form-group">
      <button className="btn btn-main btn-lg w-100" type="submit">
      Reset Password
      </button>
      
      <div className="text-left my-4">
      <div>
      Back to
      
      <a href="/login" className="fw-bold text-primary"> Login </a>
      
      </div>
      </div>
      </div>
      </form>
      </div>
      </div>
      </div>
      </main>
      );
    }
    
    export default ForgotPassword;
    