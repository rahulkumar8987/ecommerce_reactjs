import React from "react";
import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
const Homepage = () => {
  return (
    <>
      <Announce />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Homepage;
