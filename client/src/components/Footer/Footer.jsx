import React from "react";
import "./Footer.scss";

function Footer() {
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            mollitia natus eius laborum voluptatibus possimus rem saepe quaerat
            sunt, odit recusandae qui. Perspiciatis quis obcaecati cum dolorem
            sapiente provident voluptate.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            expedita nesciunt perferendis fuga veniam aliquam corporis minima
            placeat iste maiores labore aspernatur, vitae ut reprehenderit
            blanditiis quasi velit quidem in.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Mertstore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
