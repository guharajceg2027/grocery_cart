import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-gradient py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p>&copy; 2025 GroceryCart. All rights reserved.</p>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <div className="contact-info bg-light p-4 rounded shadow-lg">
              <p className="text-dark"><strong>Contact Us:</strong></p>
              <p><a href="mailto:support@grocerycart.com" className="text-dark">support@grocerycart.com</a></p>
              <p><a href="tel:+18001234567" className="text-dark">+1 (800) 123-4567</a></p>
              <p className="text-dark">Address: 123 Fresh Market Street, Food City, FC 45678</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
