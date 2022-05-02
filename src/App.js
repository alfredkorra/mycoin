import "./bootstrap.min.css";
import "./animate.min.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./Layout";
import Loader from "./Components/Loader";
import jQuery from "jquery";
import React, { useEffect } from "react";
import Login from "./Components/LoginPage/Login";
import Register from "./Components/RegisterPage/Register";
import ForgotPassword from "./Components/ResetPage/ForgotPassword";
import Contact from "./Components/ContactPage/Contact";
import { toast } from "react-toastify";
import Wallet from "./Pages/Wallet";
import Home from "./Pages/Home";
import Markets from "./Pages/Markets";
import Profile from "./Pages/Profile";



toast.configure();

function App() {

  useEffect(() => {
    // Animate loader off screen
    jQuery("#loader-page").delay(100).fadeOut("slow");
  }, []);

  return (
    <div className="app">
      <Layout>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} /> 
          <Route path="/register" component={Register} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/contact" component={Contact} />
          <Route path="/home" component={Home} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/markets" component={Markets} />
          <Route path="/profile" component={Profile} /> 
          
        </Router>
      </Layout>
       <Loader></Loader> 
    </div>
  );
}

export default App;
