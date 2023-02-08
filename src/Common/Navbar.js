import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaTelegramPlane } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Q'hubo</h3>
      <nav ref={navRef}>
        <Link onClick={showNavBar} to="/home">
          Home
        </Link>
        <Link onClick={showNavBar} to="/messages">
          Messages
        </Link>
        <Link onClick={showNavBar} to="/about">
          About
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
      <button className="compose-btn">
        <FaTelegramPlane />
      </button>
    </header>
  );
}

export default Navbar;
