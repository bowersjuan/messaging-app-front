import { useRef } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes, FaTelegramPlane, FaSignInAlt } from "react-icons/fa";
//REF: https://react-icons.github.io/react-icons/icons?name=fa

import "./Navbar.css";

import logo from "../Assets/messaging-app-logo.png"

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="logo"/>
      </Link>
      <nav ref={navRef}>
        <Link to="/signup">Sign Up</Link>
        <Link to="/about">About</Link>
        <Link to="/messages">Inbox</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
      <Link to="/messages/new" className="compose-btn">
          <FaTelegramPlane />
        </Link>
      <Link to="/login" className="login-btn">
        <FaSignInAlt />
      </Link>
    </header>
  );
}

export default Navbar;
