import React, { useContext, useState } from 'react';
import { Card, Button, Row, Col, Container, Modal, Form } from 'react-bootstrap';
import './Page.css';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { currentUser, updateUser, logout } = useContext(AuthContext);

  // State for modal visibility
  const [showModal, setShowModal] = useState(false);
  // State for editable profile fields
  const [editedName, setEditedName] = useState(currentUser.name);
  const [editedEmail, setEditedEmail] = useState(currentUser.email);
  const [editedAddress, setEditedAddress] = useState(currentUser.address || '');
  const [editedGender, setEditedGender] = useState(currentUser.gender || 'Male');
  const [editedPhone, setEditedPhone] = useState(currentUser.phone || '');

  // Open the modal
  const handleShowModal = () => setShowModal(true);

  // Close the modal
  const handleCloseModal = () => setShowModal(false);

  // Handle profile update
  const handleProfileUpdate = () => {
    // Update the user state with the new values
    updateUser({
      ...currentUser,
      name: editedName,
      email: editedEmail,
      address: editedAddress,
      gender: editedGender,
      phone: editedPhone,
    });

    setShowModal(false);  // Close the modal after saving
  };

  if (!currentUser) return <p>Please login to view your profile.</p>;

  // Conditional image URL based on gender
  const profileImage =
    currentUser.gender === 'Female'
      ? 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-olly-762020.jpg&fm=jpg' // Female placeholder image
      : 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'; // Male placeholder image

  return (
    <Container className="page py-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg border-0">
            {/* Profile Header */}
            <Card.Body>
              <div className="text-center mb-4">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="rounded-circle mb-3"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h3 className="fw-bold">{currentUser.name}</h3>
                <p className="text-muted">{currentUser.email}</p>
              </div>

              <hr />

              {/* Profile Information */}
              <div className="profile-info mb-4">
                <h5 className="fw-bold">Profile Details</h5>
                <ul className="list-unstyled">
                  <li>
                    <strong>Name:</strong> {currentUser.name}
                  </li>
                  <li>
                    <strong>Email:</strong> {currentUser.email}
                  </li>
                  <li>
                    <strong>Address:</strong> {currentUser.address || 'Not provided'}
                  </li>
                  <li>
                    <strong>Gender:</strong> {currentUser.gender || 'Not provided'}
                  </li>
                  <li>
                    <strong>Phone:</strong> {currentUser.phone || 'Not provided'}
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="d-flex justify-content-between">
                <Button variant="primary" className="w-48" onClick={handleShowModal}>
                  Edit Profile
                </Button>
                <Button variant="danger" className="w-48" onClick={logout}>
                  Logout
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for Editing Profile */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group controlId="formAddress" className="mt-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={editedAddress}
                onChange={(e) => setEditedAddress(e.target.value)}
                placeholder="Enter your address"
              />
            </Form.Group>

            <Form.Group controlId="formGender" className="mt-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                value={editedGender}
                onChange={(e) => setEditedGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                value={editedPhone}
                onChange={(e) => setEditedPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleProfileUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Profile;
