import React from 'react';
import { Container } from 'react-bootstrap'; // Importing Container from Bootstrap
import './Page.css';

const PrivacyPolicy = () => (
  <Container className="page py-5" style={{ maxWidth: '900px', margin: '0 auto' }}>
    <h2 className="text-center mb-4 fw-bold text-success">Privacy Policy</h2>
    <p>
      Your privacy is important to us. This Privacy Policy explains the personal data we collect and how we use it. By using this site, you agree to the practices described in this policy.
    </p>
    
    <h4 className="fw-bold mt-4">1. Information We Collect</h4>
    <p>
      We collect personal information that you provide when creating an account, placing an order, or contacting our customer service team. This includes your name, email address, phone number, and payment information.
    </p>
    
    <h4 className="fw-bold mt-4">2. How We Use Your Information</h4>
    <p>
      The personal information we collect is used to process your orders, provide customer support, and improve our services. We may also send promotional emails, but you can opt out at any time.
    </p>
    
    <h4 className="fw-bold mt-4">3. Data Protection</h4>
    <p>
      We take your privacy seriously and implement appropriate security measures to protect your data from unauthorized access, alteration, or destruction.
    </p>
    
    <h4 className="fw-bold mt-4">4. Sharing Your Data</h4>
    <p>
      We do not sell, rent, or share your personal data with third parties for their marketing purposes. However, we may share data with service providers who help us run our business (e.g., payment processors).
    </p>
    
    <h4 className="fw-bold mt-4">5. Cookies</h4>
    <p>
      Our website uses cookies to enhance user experience. By using our site, you consent to the use of cookies.
    </p>
    
    <h4 className="fw-bold mt-4">6. Your Rights</h4>
    <p>
      You have the right to access, correct, or delete your personal data. If you wish to exercise any of these rights, please contact us through our customer service.
    </p>
    
    <h4 className="fw-bold mt-4">7. Changes to This Policy</h4>
    <p>
      We may update this privacy policy from time to time. Any changes will be posted on this page, and the date of the most recent revision will be updated at the bottom.
    </p>
    
    <p className="mt-4">
      Thank you for trusting GroceryCart with your personal information. If you have any questions about this Privacy Policy, feel free to contact us.
    </p>
  </Container>
);

export default PrivacyPolicy;
