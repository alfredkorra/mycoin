import LOGO from '../../Assets/logo.png'
import React from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState();
  const recaptchaRef = React.useRef();
  const validEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    if (!email) {
      toast.warn("Please fill the email field!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
        draggable: true,
        progress: undefined,
      });
    } else if (!validEmail) {
      toast.warn("Please enter a valid email!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
        draggable: true,
        progress: undefined,
      });
    } else if (!password) {
      toast.warn("Please fill the password field!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "dark",
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (!recaptchaToken) {
      toast.warn("Please fill the recaptcha!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
        draggable: true,
        progress: undefined,
      });
    } else {
      const data = {
        username,
        email,
        password,
      };
      axios({
        method: "post",
        url: "http://185.209.230.64:8090/my-coin-api/register",
        data: data,
        headers: {
          "X-Recaptcha-Token": recaptchaToken,
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      })
        .then((res) => {
          history.push("/home");
          window.location.reload();
        })
        .catch((err) => {
          toast.error("ERROR! " + err, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "dark",
            draggable: true,
            progress: undefined,
          });
          console.log("err", err);
        });
    }
  }
  const verifyCallback = (recaptchaToken) => {
    setRecaptchaToken(recaptchaToken);
  };

  return (
    <>
      <main className="main-content">
        <div className="container">
          <div className="login-item">
            <div className="logo-item py-4">
              <div className="d-flex justify-content-center text-center">
                <img src={LOGO} alt="logo" className="logo-main" />
              </div>
            </div>
            <div className="login-card-form">
              <h4 className="main-title py-4">Register</h4>
              <form onSubmit={handleRegister}>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
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
                  <input
                    className="form-control"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="normal"
                    theme="dark"
                    sitekey="6Lem5_cdAAAAAOGTlGUTApVlelyg9wi_XT3H92db"
                    onChange={verifyCallback}
                  ></ReCAPTCHA>
                </div>
                <div className="form-group">
                  <button className="btn btn-main btn-lg w-100" type="submit">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="text-left my-4">
                <div>
                  Already have an account?
                  <a href="/login" className="fw-bold text-primary">
                    {" "}
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Register;
