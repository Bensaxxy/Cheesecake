import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="f-container">
      <div className="f-wrapper flexContainer">
        <div className="left-footer">
          <h1>Contact Us</h1>
          <p>
            Need to get in touch with us? Either fill out the form <br /> with
            your inquiry or find the department!
          </p>
          <img src="./images/contactUs.png" />

          <div className="social-icons flexContainer">
            <img src="./social-icons/facebook-f.svg" />
            <img src="./social-icons/instagram.svg" />
            <img src="./social-icons/x-twitter.svg" />
            <img src="./social-icons/youtube.svg" />
          </div>
          <span className="copyright">
            Copyright 2024 Bencode | All rights reserved
          </span>
        </div>
        <div className="right-footer">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea rows="9" cols="40" placeholder="Your message..." />
          <button className="contact-btn">Contact us now</button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
