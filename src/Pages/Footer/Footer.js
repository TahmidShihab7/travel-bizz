import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col p-5">
            <h3>Travel Agency</h3>
            <p>
              The world has become so fast paced that people don’t want to stand
              by reading a page of information, they would much rather look at a
              presentation and understand the message. It has to understand the
              message.
            </p>
          </div>
          <div className="col p-5">
            <h3>NAVIGATION LINKS</h3>
            <div className="row">
              <div className="col footer-nav-links">
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">Feature</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#hotels">Hotels</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                </ul>
              </div>
              <div className="col footer-nav-links">
                <ul>
                  <li>
                    <a href="#guides">Team</a>
                  </li>
                  <li>
                    <a href="#services">Pricing</a>
                  </li>
                  <li>
                    <a href="#blogs">Blog</a>
                  </li>
                  <li>
                    <a href="#packages">Packages</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col p-5">
            <h3>NEWSLETTER</h3>
            <p>
              For business professionals caught between high OEM price and
              mediocre print and graphic output and to understand the message.
            </p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                aria-label="Email Address"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-success btn-outline-light"
                type="button"
                id="button-addon2"
              >
                Opt-In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
