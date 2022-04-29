import React from "react";
import {GrHomeRounded} from 'react-icons/gr'
import {BsWallet, BsPersonPlus} from 'react-icons/bs'
import {GrContact} from 'react-icons/gr'
import './Footer.css'
import { Link } from "react-router-dom";



function Footer(props) {
  return (

    <div className="footer-bar">
          <a href="#">
          <GrHomeRounded/>
          <BsWallet />
          <BsPersonPlus />
          <GrContact />
          </a>
      </div>

  );
}

export default Footer;
