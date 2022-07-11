import React from "react";
import "./MainRouter.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";


const MainRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
