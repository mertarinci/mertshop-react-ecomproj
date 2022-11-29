import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>CONTACT WITH US VIA YOUR EMAIL:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your email..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <FacebookIcon />
          <PinterestIcon />
          <GoogleIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
}

export default Contact;
