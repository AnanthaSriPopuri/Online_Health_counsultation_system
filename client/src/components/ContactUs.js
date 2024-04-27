// ContactUs.js

import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to include this import

const ContactUs = () => {
  const submitForm = () => {
    alert('Contact form submitted successfully!');
    // You can add additional actions here if needed
  };

  return (
    <div className="contact-us-container">
      <header>
        <h1>Contact healthnutrition</h1>
        <br />
      </header>

      <section>
        <div className="info-section" style={{ borderRadius: '8px', backgroundColor: 'lavender' }}>
        <br />
          <h2>Address:</h2>
          <p style={{ fontWeight: 'normal' }}>
            Nutri Hub Office, 456 Wellness Avenue, Vijayawada, Andhra pradesh, India
          </p>
          <br />
        </div>
        <hr />

        <div className="info-section" style={{ borderRadius: '8px', backgroundColor: 'lavender' }}>
        <br />
          <h2>Phone:</h2>
          <p style={{ fontWeight: 'normal' }}>
            Customer Support: +91 12345 67890<br />         <br />
            Business Inquiries: +91 98765 43210
          </p>
          <br />
        </div>
        <hr />

        <div className="info-section" style={{ borderRadius: '8px', backgroundColor: 'lavender' }}>
        <br />
          <h2>Email:</h2>
          <p style={{ fontWeight: 'normal' }}>
            General Inquiries: info@healthnutrition.in<br />
            <br />
            Customer Support: support@healthnutrition.in<br />
            <br />
            Partnerships: partnerships@healthnutrition.in
            
          </p>
          <br />
        </div>
        <hr />

        <div className="info-section" style={{ borderRadius: '8px', backgroundColor: 'lavender' }}>
        <br />
          <h2>Social Media:</h2>
          <p style={{ fontWeight: 'normal' }}>
            Connect with us on social media for daily tips, updates, and inspiration:<br />
            Facebook,
            Instagram,
            Twitter,            LinkedIn
          </p>
          <br />
        </div>
        <hr />

        <div className="info-section" style={{ borderRadius: '8px', backgroundColor: 'lavender' }}>
        <br />
          <h2>Business Hours:</h2>
          <p style={{ fontWeight: 'normal' }}>
            Monday - Friday: 9:00 AM - 6:00 PM (Indian Standard Time)<br />        <br />
            Saturday: 10:00 AM - 3:00 PM<br />        <br />
            Sunday: Closed
          </p>
          <br />
        </div>
        <hr />

        <div className="info-section" style={{ borderRadius: '8px', backgroundColor: 'lavender' }}>
        <br />
          <h2>Get in Touch:</h2>
          <p style={{ fontWeight: 'normal' }}>
            Have questions, concerns, or just want to chat about your health and nutrition journey?
            <br />
            <br />
            Fill out the form below, and our team will get back to you within 24 hours.
          </p>
          <Link to="/form">
            <button type="button">Go to Form</button>
          </Link>
        </div>
        <hr />
      </section>

      <footer>
        <p>Thank you for choosing Nutri Hub for your health and nutrition needs. We're here to support you on your path to a healthier lifestyle.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
