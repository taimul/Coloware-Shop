import React from "react";
import Hero from "./Hero/Hero";
import Category from "./Category/Category";
import NewArrivals from "./NewArrivals/NewArrivals";
import Trending from "./Trending/Trending";
import Blog from "./Blog/Blog";
import SocialMedia from "./SocialMedia/SocilaMedia";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <NewArrivals />
      <Trending />
      <Blog />
      <SocialMedia />
    </div>
  );
};

export default Home;
