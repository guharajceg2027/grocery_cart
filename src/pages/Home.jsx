import React from 'react';
import './Home.css';
import { Carousel} from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
      <p className="hero-subtitle text-center text-white fw-bold display-4 p-3 rounded" 
   style={{ background: 'linear-gradient(45deg, #28a745, #17a2b8)', animation: 'fadeIn 2s ease-in-out' }}>
  Buy your daily groceries fresh and fast!
</p>


        <Carousel className="carousel-custom" interval={5000} ride="carousel">
          <Carousel.Item>
            <img className="d-block w-100"
              src="https://d1n5l80rwxz6pi.cloudfront.net/general/blog/fresh-vegetables-in-uae.jpg"
              alt="Fresh Vegetables"
            />
            <Carousel.Caption className="text-light bg-dark bg-opacity-25">
              <h3>Fresh Vegetables</h3>
              <p className="carousel-text">Farm-fresh veggies delivered to your door.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
              src="https://img.freepik.com/premium-photo/healthy-tasty-fruits-vegetables_135427-4547.jpg"
              alt="Tasty Fruits"
            />
            <Carousel.Caption className="text-light bg-dark bg-opacity-25">
              <h3>Tasty Fruits</h3>
              <p className="carousel-text">Enjoy juicy organic fruits every day.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
              src="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322911/dairy-and-meat.jpg" 
              alt="Daily Essentials"
            />
            <Carousel.Caption className="text-light bg-dark bg-opacity-25">
              <h3>Daily Essentials</h3>
              <p className="carousel-text">Everything you need in one place.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="testimonial-section">
        <h2>What Our Customers Say</h2>
        <blockquote>"I love the fast delivery and fresh products! Highly recommend GroceryCart!"</blockquote>
        <cite>- A Happy Customer</cite>
      </section>

    </div>
  );
};

export default Home;
