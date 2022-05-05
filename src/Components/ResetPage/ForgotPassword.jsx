import LOGO from '../../Assets/logo.png'
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const validEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  const history = useHistory();

  function handleReset(e) {
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
    } else {
      axios({
        method: "POST",
        url: "http://185.209.230.64:8090/my-coin-api/register/resetPassword",
        headers: {
          Email: email,
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      })
        .then((res) => {
          toast.success(
            "New password was sent to your Email! Check Spam also!",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              theme: "dark",
              draggable: true,
              progress: undefined,
            }
          );

          history.push("/login");
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

  return (
    <main className="main-content">
      <div className="container">
        <div className="login-item">
          <div className="logo-item py-4">
            <div className="d-flex justify-content-center text-center">
              <img src={LOGO} alt="logo" className="logo-main" />
            </div>
          </div>
          <div className="login-card-form">
            <h4 className="main-title py-4">Reset Password</h4>
            <form onSubmit={handleReset}>
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
                    <a href="/login" className="fw-bold text-primary">
                      {" "}
                      Login{" "}
                    </a>
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
