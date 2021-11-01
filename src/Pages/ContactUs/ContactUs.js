import React from "react";

const ContactUs = () => {
  return (
    <div className="container my-5 py-5 shadow p-5 bg-body contact-us">
      <h2 className="text-center mb-3">CONTACT US</h2>
      <div className="row align-items-center gx-5">
        <div className="col-lg-6 align-items-center">
          <br />
          <h3>Get In Touch</h3>
          <form className="">
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                placeholder="Enter your email"
                type="email"
                id="formBasicEmail"
                className="form-control"
              />
              <small className="text-muted form-text">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="mb-3">
              <label className="form-label">Your Message</label>
              <input
                placeholder="Enter your message"
                type="text"
                id="formBasicPassword"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Now
            </button>
          </form>
        </div>
        <div className="col-lg-6">
          <h2>Contact Info</h2>
          <p>Feel free to ask anything from us. We are always here for you.</p>
          <ul className="text-muted">
            <li>Kolabagan, Dhanmondi, Dhaka</li>
            <li>(+880) 173-8958254</li>
            <li>help@star.healthcare.com.bd</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
