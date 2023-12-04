import React from "react";
import "./footer.css";
import valve from "/assets/constants/valve.png";
import steam from "/assets/constants/steam.png";
import facebook from "/assets/constants/facebook.png";
import twitter from "/assets/constants/twitter.png";
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-grid inner-container">
        <div className="column">
          <div className="footer-logos">
            <img src={valve} alt="valve" />
            <img src={steam} alt="steam" />
          </div>
          <div className="footer-trademark">
            <p className="large">
              © 2023 Valve Corporation. All rights reserved. All trademarks are
              property of their respective owners in the US and other countries.
              VAT included in all prices where applicable.
            </p>
          </div>
        </div>
        <div className="column">
          <ul>
            <li>About Valve</li>
            <li>Jobs</li>
            <li>Steamworks</li>
            <li>Steam Distribution</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li>Privacy Policy</li>
            <li>Legal</li>
            <li>Steam Subscriber Agreement</li>
            <li>Refunds</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div className="column">
          <div className="socials">
            <div className="social">
              <img src={facebook} alt="facebook" />
            </div>
            <div className="social">
              <img src={twitter} alt="twitter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
