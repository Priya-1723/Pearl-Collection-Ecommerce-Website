import React from "react";
import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/HeroSection";
import CategoriesSection from "../components/home/CategoriesSection";
import NewArrivals from "../components/home/NewArrivals";
import Footer from "../components/home/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <NewArrivals />
      <Footer />
    </>
  );
};

export default HomePage;
