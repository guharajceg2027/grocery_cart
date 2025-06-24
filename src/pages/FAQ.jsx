import React from 'react';
import { Accordion, Container } from 'react-bootstrap'; // Importing Accordion and Container from Bootstrap
import './Page.css';

const FAQ = () => (
  <Container className="page py-5">
    <h2 className="text-center mb-4 fw-bold text-success">Frequently Asked Questions</h2>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>When will I get my groceries?</Accordion.Header>
        <Accordion.Body>
          Usually within 24 hours. Our delivery team ensures fast and reliable service for your groceries.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I cancel my order after placing it?</Accordion.Header>
        <Accordion.Body>
          Yes, you can cancel your order within an hour of placing it. After that, the order will be processed for delivery.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Do you deliver to my area?</Accordion.Header>
        <Accordion.Body>
          We currently offer delivery in selected areas. You can check your eligibility by entering your delivery address at checkout.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>What payment methods do you accept?</Accordion.Header>
        <Accordion.Body>
          We accept all major credit cards, debit cards, net banking, and mobile wallets for your convenience.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>How do I track my order?</Accordion.Header>
        <Accordion.Body>
          You can track your order status directly from the "My Orders" section in your account dashboard.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Container>
);

export default FAQ;
