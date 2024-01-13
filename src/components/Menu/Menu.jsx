import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <section className="m-container">
      <h2 className="menu">Our Menu</h2>
      <div className="m-wrapper flexContainer">
        {/* first Card*/}
        <div className="menu-card">
          <img src="./images/menu-image-1.png" />
          <h3>Blueberry Cheesecake</h3>
          <span className="sub-text">Blueberry love, cheesecake delight!</span>
          <div className="card-rate flexContainer">
            <span className="rate-amount">💲9.00</span>
            <img className="rate-img" src="./images/rate.png" />
          </div>
        </div>
        {/* second Card*/}
        <div className="menu-card">
          <img src="./images/menu-image-2.png" />
          <h3>Biscoff Cheesecake</h3>
          <span className="sub-text">Biscoff adores cheesecake magic</span>
          <div className="card-rate flexContainer">
            <span className="rate-amount">💲11.00</span>
            <img className="rate-img" src="./images/rate.png" />
          </div>
        </div>
        {/* third Card*/}
        <div className="menu-card">
          <img src="./images/menu-image-3.png" />
          <h3>Chocolate Cheesecake</h3>
          <span className="sub-text">
            Cherish Chocolate, relish cheesecake magic!
          </span>
          <div className="card-rate flexContainer">
            <span className="rate-amount">💲10.00</span>
            <img className="rate-img" src="./images/rate.png" />
          </div>
        </div>
      </div>

      <div className="view-more flexContainer">
        <span> View More</span>
        <img src="./images/arrow.png" />{" "}
      </div>
    </section>
  );
};

export default Menu;
