/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="item">
            <h4>Contacts</h4>
            <p>info@bholeeyoga.com</p>
            {/* <ul className="social-icons">
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/bholeeyoga?igsh=YW9oMDFsZnYyaXNp"
                  rel="noreferrer"
                >
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={telegram} alt="telegram" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
            </ul> */}
          </div>
          {/* <div className="item">
            <h4>Address</h4>
            <p>107th St, Inglewood, CA 90303, USA</p>
            <p>+123 456 789</p>
          </div>
          <div className="item">
            <h4>Information</h4>
            <p>Private Policy</p>
            <p>Contract Offer</p>
          </div> */}
        </div>
        <div className="copyrights">
          <p>
            {new Date().getFullYear()} ©Bholee Yoga LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
