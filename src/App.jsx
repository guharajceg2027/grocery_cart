import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components and pages
import AppNavbar from './components/Navbar'; // Renamed to avoid conflict
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import TermsAndConditions from './pages/TermsAndConditions';
import Purchase from './pages/Purchase';
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart'; // Added Cart page

// Import authentication context
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Router>
      <AppNavbar />
      <div style={{ padding: '20px', minHeight: '80vh' }}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/shop/:category" element={<ShopCategory />} />

          {/* Protected routes */}
          {currentUser && (
            <>
              <Route path="/profile" element={<Profile />} />
              <Route path="/purchase" element={<Purchase isLoggedIn={currentUser} />} />
              <Route path="/cart" element={<Cart />} /> {/* Cart page */}
            </>
          )}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
