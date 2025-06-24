import React from 'react';
import { Container } from 'react-bootstrap'; // Importing Container from Bootstrap
import './Page.css';

const TermsAndConditions = () => (
  <Container className="page py-5" style={{ maxWidth: '900px', margin: '0 auto' }}>
    <h2 className="text-center mb-4 fw-bold text-success">Terms and Conditions</h2>
    <p>
      By using this site, you agree to our terms and conditions of service. Please read them carefully. 
      These terms apply to all users, visitors, and others who access or use the service.
    </p>
    <h4 className="fw-bold mt-4">1. Introduction</h4>
    <p>
      Welcome to GroceryCart! By using our platform, you agree to comply with and be bound by these terms of service.
      If you do not agree with these terms, please refrain from using our services.
    </p>
    <h4 className="fw-bold mt-4">2. User Responsibilities</h4>
    <p>
      Users are responsible for maintaining the confidentiality of their account information, including login credentials.
      You agree to notify us immediately of any unauthorized use of your account.
    </p>
    <h4 className="fw-bold mt-4">3. Delivery Policy</h4>
    <p>
      We aim to deliver your groceries within 24 hours of order confirmation. However, delivery times may vary depending on location.
    </p>
    <h4 className="fw-bold mt-4">4. Refund and Cancellation</h4>
    <p>
      You can cancel your order within an hour of placing it. After that, the order will be processed, and cancellation may not be possible.
    </p>
    <h4 className="fw-bold mt-4">5. Limitation of Liability</h4>
    <p>
      We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
    </p>
    <h4 className="fw-bold mt-4">6. Privacy Policy</h4>
    <p>
      Your privacy is important to us. We collect only the necessary information to provide and improve our services.
    </p>
    <h4 className="fw-bold mt-4">7. Amendments</h4>
    <p>
      We reserve the right to modify or amend these terms at any time. Any changes will be effective immediately upon posting.
    </p>
  </Container>
);

export default TermsAndConditions;
