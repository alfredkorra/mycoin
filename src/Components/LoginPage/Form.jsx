import React, {Component} from "react";
import {FormValidation} from "./FormValidation";
import {connect} from "react-redux";
import {Container} from "react-bootstrap";
import Logo from "../../Assets/logo.png";
import api from './../../api';
import {LOGIN} from "../../redux/auth/actionTypes";
import "./Form.css";


// import ReCAPTCHA from "react-google-recaptcha";

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
        };
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
        const {name, password, validateEmail, validatePassword} = this.state;
        if (!validateEmail || !validatePassword) {
            return false;
        }

        const {dispatch} = this.props;
        const data = {
            name,
            password
        }
        api.post('/login', data)
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
        const {login, logout} = this.props;
        console.log('props', this.props);
        return (
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
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};


export default connect(mapStateToProps, null)(Form);
