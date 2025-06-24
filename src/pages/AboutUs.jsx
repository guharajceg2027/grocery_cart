import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './Page.css';

const AboutUs = () => (
  <Container className="page py-5" style={{ maxWidth: '1100px', margin: '0 auto' }}>
    <h2 className="text-center mb-4 fw-bold text-success">About Us</h2>
    <p className="text-center mb-5">
      We are passionate about bringing fresh groceries to your door. Our mission is to provide the best quality groceries at affordable prices, delivered right to your doorstep.
    </p>

    <Row className="g-4 d-flex align-items-stretch">
      {/* First Card */}
      <Col md={6} lg={4}>
        <Card className="h-100">
          <Card.Img variant="top" src="https://i0.wp.com/www.kouya.net/wp-content/uploads/2019/09/mission-900x450.jpg?fit=900%2C450&ssl=1" />
          <Card.Body>
            <Card.Title className="fw-bold">Our Mission</Card.Title>
            <Card.Text>
  At GroceryCart, we strive to make grocery shopping simple and convenient for everyone. We aim to provide fresh products directly from local farms to your door. 
  We are committed to offering a wide variety of groceries to meet all your needs, from pantry staples to fresh produce. 
  Our team is dedicated to ensuring fast, reliable deliveries and excellent customer service. 
  We believe in building strong relationships with our customers and local suppliers to support the community.
</Card.Text>

          </Card.Body>
        </Card>
      </Col>

      {/* Second Card */}
      <Col md={6} lg={4}>
        <Card className="h-100">
          <Card.Img variant="top" src="https://img.freepik.com/premium-vector/premium-fresh-quality-lettering_1262-9416.jpg" />
          <Card.Body>
            <Card.Title className="fw-bold">Quality & Freshness</Card.Title>
            <Card.Text>
              We carefully select our suppliers to ensure that we deliver only the highest quality and freshest groceries. Your satisfaction is our top priority.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Third Card */}
      <Col md={6} lg={4}>
        <Card className="h-100">
          <Card.Img variant="top" src="https://redingtongroup.com/wp-content/uploads/2023/06/How-Businesses-Can-Set-the-Standard-for-Sustainable-Business-Practices_shutterstock_2162001981.png" />
          <Card.Body>
            <Card.Title className="fw-bold">Sustainable Practices</Card.Title>
            <Card.Text>
              We believe in sustainability and work with eco-friendly packaging and green practices to reduce our environmental footprint while delivering fresh groceries.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Team Section */}
    <h3 className="text-center mt-5 mb-4 fw-bold">Meet the Team</h3>
    <Row className="g-4 d-flex align-items-stretch">
      <Col md={4}>
        <Card className="text-center h-100">
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg" />
          <Card.Body>
            <Card.Title>John Doe</Card.Title>
            <Card.Text>CEO & Founder</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="text-center h-100">
          <Card.Img variant="top" src="https://sd2.org/app/uploads/2024/05/May-blog-featured-images-3.png" />
          <Card.Body>
            <Card.Title>Jane Smith</Card.Title>
            <Card.Text>Head of Operations</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="text-center h-100">
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/MS_Dhoni_%28Prabhav_%2723_-_RiGI_2023%29.jpg" />
          <Card.Body>
            <Card.Title>David Brown</Card.Title>
            <Card.Text>Customer Relations Manager</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default AboutUs;
