import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          Feel free to reach out.
          email: laibaazeem608@gmail.com
        </p>

        <div className="form-group">
          <a
            href="mailto:laibaazeem508@gmail.com" 
            className="btn-submit"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
