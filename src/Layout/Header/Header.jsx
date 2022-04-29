import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import Logo from "../../Assets/logo.png";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
import "./Header.css";
import { Nav, NavLink } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Nav className="nav">
        <NavLink className="nav-link">
          <IoIosArrowBack />
          <MdOutlineNotificationsActive />
        </NavLink >
      </Nav>
    </>
  );
};

export default Header;
