import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Header = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsible_nav");
  };

  return (
    <section className="h-container">
      <div className="h-wrapper flexContainer">
        <img className="logo" src="./images/logo.png" alt="logo" />

        <div ref={navRef} className="h-menu flexContainer">
          <div className="navLinks flexContainer">
            <a href="/#">Home</a>
            <a href="/#">About Us</a>
            <a href="/#">Menu</a>
            <a href="/#">Contact</a>
          </div>

          <div className="navbtn">
            <button className="outline-btn o-btn">Sign Up</button>
            <button onClick={showNavBar} className="nav-close-btn">
              <FaBars />
            </button>
          </div>
        </div>

        <button onClick={showNavBar} className="nav-btn">
          <FaTimes />
        </button>
      </div>
    </section>
  );
};

export default Header;
