import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState();
  const recaptchaRef = React.useRef();
  const validEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  async function handleLogin(event) {
    event.preventDefault();
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
      try {
        //TO BE DONE
        toast.success("TO BE DONE!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "dark",
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        //TO BE DONE
        toast.error("SOMETHING IS GOES WRONG!" + error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "dark",
          draggable: true,
          progress: undefined,
        });
      }
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
                <img src="/logo.png" alt="logo" className="logo-main" />
              </div>
            </div>
            <div className="login-card-form">
              <h4 className="main-title py-4">Login</h4>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
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
                    Sign In
                  </button>
                </div>
              </form>
              <div className="text-left my-4">
                <div className="mb-1">
                  <a href="/forgotPassword" className="fw-bold text-primary">
                    Forgot password?
                  </a>
                </div>
                <div>
                  Don't have an account?
                  <a href="/register" className="fw-bold text-primary">
                    {" "}
                    Register Here
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
export default Login;
