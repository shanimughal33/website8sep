import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from "../Hero/Hero.jsx";
import Banner from "../Banner/Banner.jsx";
import About from "../About/About.jsx";
import Services from "../Services/Services.jsx";
import Footer from "../Footer/Footer.jsx";
import Popup from "../Popup/Popup.jsx";
import Statistics from "../Statistics/Statistics.jsx"; 
import Whychooseus from "../Whychooseus/Whychooseus.jsx";

const MainContent = ({ orderPopup, handleOrderPopup, setOrderPopup }) => {
  const location = useLocation();
  
  const isFullAddToCartPage = location.pathname === '/fulladdtocart';

  return (
    <>
      {!isFullAddToCartPage && (
        <>
          <Hero />
          <Banner />
          <Whychooseus />
          <Services />
          <Statistics />
          <About handleOrderPopup={handleOrderPopup} />
          <Footer />
          <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </>
      )}
    </>
  );
};

export default MainContent;
