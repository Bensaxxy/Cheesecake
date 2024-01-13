import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="h-container">
      <div className="hero-wrapper flexContainer">
        {/*left side*/}
        <div className="left-side">
          <h1 className="hero-title">
            Bite The World of <br /> Cheesecake Wonders
          </h1>
          <p>
            We always make our customer happy by providing <br /> as many
            choices as possible
          </p>

          <div className="btnContainer flexContainer">
            <button className="fill-btn">Get Started</button>
            <button className="outline-btn demo-btn">
              <img src="./images/play.png" />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="right-side">
          <img src="./images/hero.png" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
