import React, { Component } from "react";
import { FormValidation } from "./FormValidation";
import "./Form.css";
import { Container } from "react-bootstrap";
import Logo from "../Assets/logo.png";
import { height } from "@mui/system";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react';
import { toast } from 'react-toastify';

const [recaptchaToken, setRecaptchaToken] = useState();
const recaptchaRef = React.useRef();

const verifyCallback = (recaptchaToken) => {
  setRecaptchaToken(recaptchaToken);
};

class Form extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      FormValidation: { email: "", password: "" },
      validateEmail: false,
      validatePassword: false,
      validateForm: false,
    };
  }

  validateUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const recaptchaRef = React.useRef();
    this.setState({ [name]: value }, () => {
      this.validateInputField(name, value);
    });
  };

  validateInputField(inputField, value) {
    let inputFieldErrors = this.state.FormValidation;
    let validateEmail = this.state.validateEmail;
    let validatePassword = this.state.validatePassword;

    switch (inputField) {
      case "email":
        validateEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        inputFieldErrors.email = validateEmail ? "" : " is invalid!";
        break;
      case "password":
        validatePassword = value.length >= 6;
        inputFieldErrors.password = validatePassword ? "" : " is too short!";
        break;
      default:
        break;
    }
    this.setState(
      {
        FormValidation: inputFieldErrors,
        validateEmail: validateEmail,
        validatePassword: validatePassword,
      },
      this.validateForms
    );
  }

  validateForms() {
    this.setState({
      validateForm: this.state.validateEmail && this.state.validatePassword,
    });
  }
  
  render() {
    return (
      <Container>
        <div className="row">
          <div className="col-md-12 mx-auto">
            <img
              src={Logo}
              style={{
                backgroundColor: "transparent",
                width: "300px",
                height: "100px",
              }}
            />
            <div className="myform form ">
              <form className="signupForm" onSubmit={this.cmdSubmit}>
                <h6
                  style={{
                    color: "white",
                  }}
                >
                  Log In
                </h6>
                <div className="panel panel-default">
                  <FormValidation FormValidation={this.state.FormValidation} />
                </div>
                <div className="form-group">
                  <br />

                  <input
                    type="email"
                    required
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.validateUserInput}
                    style={{
                      borderRadius: "12px",
                      border: "none",
                      fontSize: "16px",
                      height: "41px",
                      color: '#fff',
                      backgroundColor: "#2A2D3C"
                    }}
                  />
                </div>
                <div className="form-group">
                  <br />
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.validateUserInput}
                    style={{
                      borderRadius: "12px",
                      border: "none",
                      fontSize: "16px",
                      height: "41px",
                      color: '#fff',
                      backgroundColor: "#2A2D3C"
                    }}
                  />
                </div>
                <br />
                <ReCAPTCHA 
                        ref={recaptchaRef}
                        size="normal"
                        theme="dark"
                        sitekey="6Lem5_cdAAAAAOGTlGUTApVlelyg9wi_XT3H92db"
                        onChange={verifyCallback}>
                        </ReCAPTCHA>

                <div className="text-center">
                  <button 
                    style={{
                      backgroundColor: "#F3C418",
                      width: " 100%",
                      fontWeight: 600,
                      padding: " 10px 25px",
                      borderRadius: "10px",
                      color: "#000",
                    }}
                    type="submit"
                    className="btn"
                   >
                    Sign In
                  </button>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default Form;
