import React from "react";
import "./home.scss";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Caregories from "../../components/Categories/Categories";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Caregories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
