import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Button, Container, Alert, Modal } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import './shop.css';

const ShopCategory = () => {
  const { category } = useParams(); // Get category from URL params
  const { addToCart } = useCart(); // Access addToCart from context

  const products = {
    Vegetables: [
      { name: "Carrot", price: "₹150", image: "https://www.hhs1.com/hubfs/carrots%20on%20wood-1.jpg", weight: "500g" },
      { name: "Spinach", price: "₹200", image: "https://seed2plant.in/cdn/shop/products/spinachseeds.jpg?v=1603966262&width=1500", weight: "250g" },
      { name: "Potato", price: "₹100", image: "https://m.media-amazon.com/images/I/41QKCkQ2A5L.jpg", weight: "1kg" },
      { name: "Tomato", price: "₹180", image: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb.jpg", weight: "500g" },
      { name: "Cucumber", price: "₹120", image: "https://seed2plant.in/cdn/shop/products/saladcucumberseeds.jpg?v=1603435556", weight: "400g" },
      { name: "Onion", price: "₹130", image: "https://produits.bienmanger.com/36700-0w470h470_Organic_Red_Onion_From_Italy.jpg", weight: "500g" },
      { name: "Garlic", price: "₹150", image: "https://www.jiomart.com/images/product/original/590003532/indian-garlic-200-g-product-images-o590003532-p590003532-0-202408070949.jpg?im=Resize=(420,420)", weight: "250g" },
      { name: "Lettuce", price: "₹200", image: "https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg", weight: "200g" },
      { name: "Bell Pepper", price: "₹220", image: "https://cdn.dotpe.in/longtail/store-items/8071585/miCAkWoT.jpeg", weight: "300g" },
      { name: "Broccoli", price: "₹250", image: "https://www.allthatgrows.in/cdn/shop/products/Broccolli.jpg?v=1598079208", weight: "400g" },
    ],
    Fruits: [
      { name: "Apple", price: "₹80", image: "https://organicmandya.com/cdn/shop/files/Apples_bf998dd2-0ee8-4880-9726-0723c6fbcff3.jpg?v=1721368465&width=1000", weight: "500g" },
      { name: "Banana", price: "₹40", image: "https://www.bigbasket.com/media/uploads/p/l/10000025_32-fresho-banana-robusta.jpg", weight: "1kg" },
      { name: "Orange", price: "₹100", image: "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg", weight: "600g" },
      { name: "Strawberry", price: "₹250", image: "https://www.pennington.com//-/media/Project/OneWeb/Pennington/Images/blog/fertilizer/How-to-Grow-Strawberries/Strawberry-h.jpg", weight: "250g" },
      { name: "Grapes", price: "₹180", image: "https://m.media-amazon.com/images/I/71MQD-Dj1gL.jpg", weight: "500g" },
      { name: "Pineapple", price: "₹200", image: "https://plantskingdom.in/cdn/shop/products/pinababy-psyche.jpg?v=1657427540", weight: "1kg" },
      { name: "Watermelon", price: "₹300", image: "https://hips.hearstapps.com/hmg-prod/images/fresh-ripe-watermelon-slices-on-wooden-table-royalty-free-image-1684966820.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*", weight: "2kg" },
      { name: "Blueberry", price: "₹350", image: "https://img.staticmb.com/mbcontent/images/crop/uploads/2024/10/Blueberry-plant-fruits-grow-in-pretty-clusters_0_1200.jpg", weight: "200g" },
      { name: "Mango", price: "₹150", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shopsy-plant-sapling/r/e/d/annual-no-yes-glenn-mango-plant-grafted-1-punarva-original-imah3ckqkf2rm73w.jpeg?q=20&crop=false", weight: "500g" },
      { name: "Peach", price: "₹220", image: "https://draxe.com/wp-content/uploads/2016/08/DrAxePeachThumbnail.jpg", weight: "400g" },
    ],
    Dairy: [
      { name: "Milk", price: "₹60", image: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_354060824-1024x683.jpeg", weight: "1L" },
      { name: "Cheese", price: "₹300", image: "https://static.toiimg.com/thumb/82065684.cms?resizemode=4&width=1200", weight: "200g" },
      { name: "Butter", price: "₹180", image: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/benefits-of-butter-1296x728-feature.jpg", weight: "100g" },
      { name: "Yogurt", price: "₹100", image: "https://www.eatingwell.com/thmb/nOQUtHX_CnVRGcw34lF_yMsMwuI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/homemade-plain-greek-yogurt-beauty-5323c43bb8ef4bf891e42d6e5023381b.jpg", weight: "400g" },
      { name: "Cream", price: "₹120", image: "https://www.inspiredtaste.net/wp-content/uploads/2025/02/Homemade-Whipped-Cream-Recipe.jpg", weight: "200g" },
      { name: "Cottage Cheese", price: "₹250", image: "https://cheesemaking.com/cdn/shop/products/cottage-cheese-recipe-266121.jpg?crop=center&height=1200&v=1739766325&width=1200", weight: "250g" },
      { name: "Mozzarella", price: "₹350", image: "https://5.imimg.com/data5/SELLER/Default/2024/11/467087708/DV/GM/MS/8960632/mozarella-cheese-block-kg.png", weight: "200g" },
      { name: "Ice Cream", price: "₹300", image: "https://carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker.jpg", weight: "500g" },
      { name: "Sour Cream", price: "₹150", image: "https://www.allrecipes.com/thmb/lhccdFVkWrMlDXwlXZXjcB7mMok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7765820-bf0d52e60ab842a09c8dfabcd481e771.jpg", weight: "200g" },
      { name: "Milk Powder", price: "₹200", image: "https://purensoselect.in/cdn/shop/products/100-goat-milk-powder-661.webp?v=1676277895r", weight: "500g" },
    ],
    Snacks: [
      { name: "Chips", price: "₹50", image: "https://india.neelamfoodland.in/cdn/shop/products/IMG_3513_1200x.jpg?v=1734379502", weight: "200g" },
      { name: "Cookies", price: "₹150", image: "https://bakewithshivesh.com/wp-content/uploads/2020/05/151F814A-2749-4978-BA53-3AD2A962C933-scaled.jpg", weight: "150g" },
      { name: "Popcorn", price: "₹80", image: "https://www.flippedoutfood.com/wp-content/uploads/2022/02/Movie-Theater-Popcorn-featured-735x735.jpg", weight: "100g" },
      { name: "Candy", price: "₹30", image: "https://houseofcandy.in/cdn/shop/files/lolipops_1200x.png?v=1697196204", weight: "150g" },
      { name: "Chocolate", price: "₹200", image: "https://royceindia.com/cdn/shop/files/ChocolateBarBlack_1.webp?v=1705398052&width=1080", weight: "100g" },
      { name: "Pretzels", price: "₹120", image: "https://crustworthybreads.in/cdn/shop/files/SoftPretzels.jpg?v=1713961618", weight: "200g" },
      { name: "Granola Bar", price: "₹150", image: "https://unsophisticook.com/wp-content/uploads/2014/08/Crunchy-Granola-Bar-Recipe.jpg", weight: "100g" },
      { name: "Nuts", price: "₹250", image: "https://www.instacart.com/company/wp-content/uploads/2024/02/types-of-nuts-hero.webp", weight: "300g" },
      { name: "Chewing Gum", price: "₹40", image: "https://okcredit-blog-images-prod.storage.googleapis.com/2022/01/chewinggumbrands2.jpg", weight: "50g" },
      { name: "Biscuits", price: "₹100", image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/kenyan_tea_biscuits_97482_16x9.jpg", weight: "200g" },
    ],
    Beverages: [
      { name: "Juice", price: "₹120", image: "https://livpure.com/cdn/shop/articles/List-of-Factors-to-Take-Into-Account-When-Buying-a-Water-Purifier-1_b86a5210-43a6-4b66-b608-6792fede4d3a-163194.png?v=1726726253", weight: "500ml" },
      { name: "Soda", price: "₹50", image: "https://m.media-amazon.com/images/I/613YFwXFEDL.jpg", weight: "500ml" },
      { name: "Coffee", price: "₹150", image: "https://miro.medium.com/v2/resize:fit:1400/1*pYGst_JE997DPcNXY5OT0w.jpeg", weight: "250g" },
      { name: "Tea", price: "₹80", image: "https://www.teaforturmeric.com/wp-content/uploads/2021/11/Masala-Chai-Tea-Recipe-Card.jpg", weight: "100g" },
      { name: "Energy Drink", price: "₹250", image: "https://m.media-amazon.com/images/I/91ajtsDtbhL.jpg", weight: "250ml" },
      { name: "Water", price: "₹20", image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/conversions/b8a1309a-ba53-48c7-bca3-9c36aab2338a-thumb.jpg", weight: "1L" },
      { name: "Milkshake", price: "₹200", image: "https://preppykitchen.com/wp-content/uploads/2021/04/Milkshake-Recipe-Card.jpg", weight: "500ml" },
      { name: "Smoothie", price: "₹300", image: "https://static01.nyt.com/images/2025/02/25/multimedia/Strawberry-Smoothie-cqzb/Strawberry-Smoothie-cqzb-videoSixteenByNineJumbo1600.jpg", weight: "500ml" },
      { name: "Iced Tea", price: "₹120", image: "https://images.themodernproper.com/production/posts/IcedTea_8.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1716306653&s=e7e37b87126eaafc95ddb53435ba341e", weight: "300ml" },
      { name: "Lemonade", price: "₹100", image: "https://i2.wp.com/lmld.org/wp-content/uploads/2022/04/Lemonade-4.jpg", weight: "400ml" },
    ],
    Bakery: [
      { name: "Bread", price: "₹60", image: "https://theloopywhisk.com/wp-content/uploads/2024/08/Gluten-Free-Sandwich-Bread_1200px-2.jpg", weight: "400g" },
      { name: "Cake", price: "₹300", image: "https://www.shreemithai.com/cdn/shop/products/black-forest-cake-222028.jpg?v=1707819760", weight: "500g" },
      { name: "Muffin", price: "₹120", image: "https://www.bamco.com/wp-content/uploads/2023/09/carrot_walnut_muffin_recipe_970x546px_istock-1161760359-1.jpg", weight: "150g" },
      { name: "Pastry", price: "₹180", image: "https://justbakedcake.com/wp-content/uploads/2020/09/Chocochip-pastry.jpg", weight: "100g" },
      { name: "Croissant", price: "₹150", image: "https://sarahsvegankitchen.com/wp-content/uploads/2024/05/Vegan-Croissants-1.jpg", weight: "100g" },
      { name: "Cookies", price: "₹80", image: "https://bakewithshivesh.com/wp-content/uploads/2020/09/IMG-8129-1-scaled.jpg", weight: "150g" },
      { name: "Donuts", price: "₹120", image: "https://kreamz.in/wp-content/uploads/2023/12/chocolaste-donut.webp", weight: "200g" },
      { name: "Brownies", price: "₹200", image: "https://www.allrecipes.com/thmb/Bf_v7CGEIk1T0KOYsBeGdcs56Lo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-9599-Quick-Easy-Brownies-ddmfs-4x3-697df57aa40a45f8a7bdb3a089eee2e5.jpg", weight: "250g" },
      { name: "Bagel", price: "₹100", image: "https://crustworthybreads.in/cdn/shop/files/Bagels.png?v=1715664025", weight: "150g" },
      { name: "Pie", price: "₹250", image: "https://sallysbakingaddiction.com/wp-content/uploads/2016/06/blueberry-pie.jpg", weight: "400g" },
    ]
    
  };

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [showDetails, setShowDetails] = useState(false); // Manage modal visibility
  const [currentProduct, setCurrentProduct] = useState(null); // Manage the current product to show details

  useEffect(() => {
    if (products[category]) {
      setCategoryProducts(products[category]);
    }
  }, [category]);

  const handleAddToCart = (product) => {
    const item = {
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    };
    addToCart(item);
    setSuccessMessage(`${product.name} added successfully!`);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleImageClick = (product) => {
    setCurrentProduct(product); // Set the current product for details
    setShowDetails(true); // Show the modal
  };

  return (
    <Container className="shop-category py-4">
      <h2 className="mb-4 text-capitalize">{category}</h2>
      {successMessage && (
        <Alert variant="success">{successMessage}</Alert>
      )}

      <Row>
        {categoryProducts.map((product, index) => (
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={index}>
            <Card className="shadow-sm h-100 product-card">
              <div className="product-image-container">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    height: '200px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  onClick={() => handleImageClick(product)}
                />
                <div className="product-details">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="text-success fw-bold">{product.price}</Card.Text>
                  <Card.Text>{product.weight}</Card.Text>
                  <Button variant="success" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for displaying product details */}
      {currentProduct && (
        <Modal show={showDetails} onHide={() => setShowDetails(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{currentProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              style={{
                width: '100%',
                height: '300px', // Fixed height to ensure consistency
                objectFit: 'cover',
              }}
            />
            <p><strong>Price:</strong> {currentProduct.price}</p>
            <p><strong>Weight:</strong> {currentProduct.weight}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowDetails(false)}>Close</Button>
            <Button variant="success" onClick={() => handleAddToCart(currentProduct)}>Add to Cart</Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default ShopCategory;
