import React from "react";
import Header from "../Components/Pages/Shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
