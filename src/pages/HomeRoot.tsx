import React from 'react';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home/Home';
import HomeNavBar from '../Components/Home/HomeNavBar';
import HomeHeader from '../Components/Home/HomeHeader';

export default function HomeRoot() {
  return (
    <>
      <HomeNavBar />
      <HomeHeader/>
      <Home />
      <Footer />
    </>
  );
}
