import React from "react";
import "./LoveChesse.css";

const LoveChesse = () => {
  return (
    <section className="l-container">
      <div className="l-wrapper flexContainer">
        <div className="left-side">
          <img src="./images/w-img.png" />
        </div>
        <div className="right-side">
          <h1>We Love Cheesecake</h1>
          <p>Discover Our Cheesecake Story</p>
          <p>
            At Cheesecake Love, quality is our cornerstone. Each <br />{" "}
            cheesecake is crafted with the finest ingredients, <br /> meticulous
            attention to detail, and a dash of creativity.
          </p>
          <p>
            We believe in delivering not just desserts but moments of <br />{" "}
            sheer indulgence.
          </p>

          <button className="fill-btn read-more">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default LoveChesse;
