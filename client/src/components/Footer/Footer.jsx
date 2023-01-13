import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic
            praesentium nisi fugiat dolor iste, quidem minus blanditiis maxime
            amet odit tenetur deleniti corporis numquam quasi, accusantium
            adipisci expedita qui?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic
            praesentium nisi fugiat dolor iste, quidem minus blanditiis maxime
            amet odit tenetur deleniti corporis numquam quasi, accusantium
            adipisci expedita qui?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">MCommerce</span>
          <span className="copyright"> © 2023 All rights reserved.</span>
        </div>
        <div className="right">
          <img
            className="footer_icon"
            src="/img/paypal-svgrepo.svg"
            alt="paypal"
          />
          <img
            className="footer_icon"
            src="/img/am_ex_wine.svg"
            alt="american express"
          />
          <img className="footer_icon" src="/img/visa-svgrepo.svg" alt="visa" />
          <img
            className="footer_icon"
            src="/img/stripe-svgrepo.svg"
            alt="stripe"
          />
          <img
            className="footer_icon"
            src="/img/revolut-wine.svg"
            alt="revolut"
          />
          <img
            className="footer_icon"
            src="/img/mastercard-wine.svg"
            alt="revolut"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
