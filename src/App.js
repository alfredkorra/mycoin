import Login from "./Components/LoginPage/Form";
import { BrowserRouter as Router, Route } from "react-router-dom";
import  Form  from "./Components/LoginPage/Form";
import Layout from "./Layout";
import Footer from "./Layout/Footer/Footer";
import Loader from "./Components/Loader";
import './bootstrap.min.css';
import './animate.min.css';
import "./App.css";
import jQuery from 'jquery';
import React, { useEffect } from 'react';


function App() {
  useEffect(()=>{
    // Animate loader off screen
    jQuery("#loader-page").delay(100).fadeOut("slow");
  }, []);

  return (
    <div className="app">
{ <Layout>
        <Router>
          <Route path="/login" component={Login} />
          <Route path="/form" component={Form} />
          <Form></Form>
        </Router>
      </Layout> }
      <Loader></Loader>
      <Footer />
    </div>
  );
}

export default App;
