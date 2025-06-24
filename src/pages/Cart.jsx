import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Card, Row, Col, Button, Form } from "react-bootstrap";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [address, setAddress] = useState("");

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * parseInt(item.price.replace("₹", "")),
    0
  );

  const handlePayment = () => {
    if (!address.trim()) {
      alert("Please enter a delivery address before proceeding.");
      return;
    }
    setPaymentSuccess(true);
    clearCart();
  };

  return (
    <div className="cart-page p-4">
      <h2>Your Cart</h2>

      {cartItems.length === 0 && !paymentSuccess && (
        <p className="text-muted">🛒 Your cart is empty.</p>
      )}

      <Row>
        {cartItems.map((item, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card>
              {/* Adjusting image size */}
              <Card.Img 
                variant="top" 
                src={item.image} 
                className="img-fluid" 
                style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '0 auto' }} 
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: {item.price}</Card.Text>
                <Card.Text>Quantity: {item.quantity}</Card.Text>
                <Card.Text>
                  Subtotal: ₹{item.quantity * parseInt(item.price.replace("₹", ""))}
                </Card.Text>
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {cartItems.length > 0 && !paymentSuccess && (
        <>
          <h4 className="mt-4">Total: ₹{total}</h4>

          <Form className="my-3">
            <Form.Group>
              <Form.Label>Delivery Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
          </Form>

          <Button
            variant="success"
            onClick={handlePayment}
            disabled={!address.trim()}
          >
            Pay Now
          </Button>
        </>
      )}

      {paymentSuccess && (
        <div className="mt-4">
          <h4>🎉 Payment Successful!</h4>
          <p>Your order will be delivered to: <strong>{address}</strong></p>
        </div>
      )}
    </div>
  );
};

export default Cart;
