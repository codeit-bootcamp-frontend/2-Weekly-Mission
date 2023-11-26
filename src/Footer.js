import React from "react";
import "./style.css";
import facebookLogo from "./img/facebook.svg";
import twitterLogo from "./img/twitter.svg";
import youtubeLogo from "./img/youtube.svg";
import instagramLogo from "./img/instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerBox">
        <span className="copyright">@codeit - 2023</span>
        <div className="footerLinks">
          <a className="footerLink" href="privacy.html">
            Privacy Policy
          </a>
          <a className="footerLink" href="faq.html">
            FAQ
          </a>
        </div>
        <div className="sns">
          <a href="https://www.facebook.com/">
            <img
              src={facebookLogo}
              alt="facebook 홈페이지로 이동하는 facebook 로고"
            />
          </a>
          <a href="https://www.twitter.com/">
            <img
              src={twitterLogo}
              alt="twitter 홈페이지로 이동하는 twitter 로고"
            />
          </a>
          <a href="https://www.youtube.com/">
            <img
              src={youtubeLogo}
              alt="youtube 홈페이지로 이동하는 youtube 로고"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              src={instagramLogo}
              alt="instagram 홈페이지로 이동하는 instagram 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
