import React, {Component, createRef} from "react";
import {FormValidation} from "./FormValidation";
import {connect} from "react-redux";
import {Container} from "react-bootstrap";
import Logo from "../../Assets/logo.png";
import api from './../../api';
import axios from 'axios';
import {LOGIN} from "../../redux/auth/actionTypes";
import "./Form.css";
import ReCAPTCHA from "react-google-recaptcha";


const recaptchaRef = createRef();


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            FormValidation: {email: "", password: ""},
            validateEmail: false,
            validatePassword: false,
            validateForm: false,
            token: null
        };
    }


    onChange(value) {
        console.log("Captcha value:", value);
        this.setState((prevState) => ({
            ...prevState,
            token: value
        }))
    }


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
                validatePassword = value.length >= 5;
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
        );
    }


    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
        this.validateInputField(name, value);
    }

    handleLogin = (e) => {
        e.preventDefault();
        const {email, password, validateEmail, validatePassword, token} = this.state;
        if (!validateEmail || !validatePassword) {
            return false;
        }
        const {dispatch} = this.props;
        const data = {
            email,
            password
        }
        axios({
            method: 'post',
            url: 'http://185.209.230.64:8090/my-coin-api',
            data: data,
            headers: {
                'X-Recaptcha-Token': token
            }
        })
            .then((res) => {
                dispatch({type: LOGIN.concat("_SUCCESS"), payload: res})
            })
            .catch((err) => {
                console.log('err', err)
                dispatch({type: LOGIN.concat("_FAILURE")})
            })
    }


    render() {
        const {email, password} = this.state;

        return (
            <div>
                <Container>
                    <div className="row">
                        <div className="col-md-12 mx-auto">
                            <img
                                alt='logo'
                                src={Logo}
                                style={{
                                    backgroundColor: "transparent",
                                    width: "300px",
                                    height: "100px",
                                }}
                            />
                            <div className="myform form ">
                                <form className="signupForm">
                                    <div className="panel panel-default">
                                        <FormValidation FormValidation={this.state.FormValidation}/>
                                    </div>
                                    <div className="form-group">
                                        <br/>

                                        <input
                                            type="email"
                                            required
                                            className="form-control"
                                            name="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(event) => this.handleInputChange(event)}
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
                                        <br/>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(event) => this.handleInputChange(event)}
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
                                    <br/>

                                    <div className="text-center">
                                        <button
                                            onClick={(e) => this.handleLogin(e)}
                                            style={{
                                                backgroundColor: "#F3C418",
                                                width: " 100%",
                                                fontWeight: 600,
                                                padding: " 10px 25px",
                                                borderRadius: "10px",
                                                color: "#000",
                                            }}
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
                <div>
                    <ReCAPTCHA
                        sitekey="6LfRJ7kfAAAAAGznF-cQOAF_EeVjnzmxumaCa9jn"
                        ref={recaptchaRef}
                        onChange={() => this.onChange()}
                    />
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};


export default connect(mapStateToProps, null)(Form);
