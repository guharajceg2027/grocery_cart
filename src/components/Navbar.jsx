import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';

const AppNavbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <Navbar bg="success" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-3 text-white">
          GroceryCart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) => (isActive ? 'active text-light fw-bold' : 'text-light')}
            >
              Home
            </Nav.Link>

            {/* Conditionally rendered links for logged-in users */}
            {currentUser && (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/purchase"
                  className={({ isActive }) => (isActive ? 'active text-light fw-bold' : 'text-light')}
                >
                  Purchase
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/cart"
                  className={({ isActive }) => (isActive ? 'active text-light fw-bold' : 'text-light')}
                >
                  Cart
                </Nav.Link>
              </>
            )}

            <Nav.Link
              as={NavLink}
              to="/about-us"
              className={({ isActive }) => (isActive ? 'active text-light fw-bold' : 'text-light')}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/faq"
              className={({ isActive }) => (isActive ? 'active text-light fw-bold' : 'text-light')}
            >
              FAQ
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/privacy-policy"
              className={({ isActive }) => (isActive ? 'active text-light fw-bold' : 'text-light')}
            >
              Privacy Policy
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/terms-and-conditions"
              className={({ isActive }) => (isActive ? 'active text-light fw-bold' : 'text-light')}
            >
              Terms and Conditions
            </Nav.Link>

            {/* Conditionally rendered links for logged-out users */}
            {currentUser ? (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/profile"
                  className={({ isActive }) => (isActive ? 'active text-light fw-bold' : 'text-light')}
                >
                  Profile
                </Nav.Link>
                <Nav.Link onClick={logout} style={{ cursor: 'pointer' }} className="fw-bold text-light">
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/login"
                  className={({ isActive }) => (isActive ? 'active text-light fw-bold' : 'text-light')}
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/signup"
                  className={({ isActive }) => (isActive ? 'active text-light fw-bold' : 'text-light')}
                >
                  Signup
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
