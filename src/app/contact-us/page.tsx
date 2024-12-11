import React from "react";
import "./style.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us for any inquiries or support.",
};

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-description">
          Have questions or need assistance? We’re here to help! Reach out to us using the contact details or the form below.
        </p>

        {/* Contact Information Section */}
        <div className="contact-info-section">
          <div className="contact-info">
            <h2>Contact Info</h2>
            <p>Email: ayamonhashim44@gmail.com</p>
            <p>Phone: +91 9496180153</p>
            <p>Address: Malappuram  Kerala</p>
          </div>
          <div className="social-media">
            <h2>Follow Us</h2>
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>

        
        <div className="contact-form-section">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={5} required></textarea>
            <button type="submit" className="form-submit-button">
              Submit
            </button>
          </form>
        </div>

        
      </div>
    </div>
  );
};

export default Contact;
