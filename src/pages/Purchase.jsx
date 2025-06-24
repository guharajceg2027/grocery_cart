import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Purchase = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const categoryImages = {
    Vegetables: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_1440:810,f_auto,q_auto,g_auto/shape/cover/sport/643188-gettyimages-153946385-ca1ccfaad9be44325afc434b305adc0d.jpg', Fruits: 'https://hips.hearstapps.com/hmg-prod/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-1729774230.jpg',
    Dairy: 'https://png.pngtree.com/png-clipart/20241028/original/pngtree-dairy-delights-collection-product-png-image_16528135.png',
    Snacks: 'https://i.etsystatic.com/29356732/r/il/34dc4c/5159352621/il_fullxfull.5159352621_guwf.jpg',
    Beverages: 'https://nawon.com.vn/wp-content/uploads/2024/01/soft-drinks.jpg',
    Bakery: 'https://i0.wp.com/pam-main-website-media.s3.amazonaws.com/wp-content/uploads/2023/10/06111734/Expanding-Your-Cottage-Bakery-Product-Line.jpg?fit=1200%2C800&ssl=1',
  };

  const handleShopNow = (category) => {
    if (isLoggedIn) {
      navigate(`/shop/${category}`); // Navigate to the category page
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="purchase-page" style={{ padding: '20px' }}>
      <h2>Shop by Category</h2>
      <Row>
        {["Vegetables", "Fruits", "Dairy", "Snacks", "Beverages", "Bakery"].map((item, index) => (
          <Col key={index} sm={6} md={4}>
            <Card className="mb-4 shadow-sm">
              {/* Image with fixed size */}
              <Card.Img 
                variant="top" 
                src={categoryImages[item] || `https://source.unsplash.com/400x300/?${item}`} 
                alt={`${item} category`} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title>{item}</Card.Title>
                <Button variant="success" onClick={() => handleShopNow(item)}>Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Purchase;
