import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/CommonPages/Navbar";
import HomePage from "./Components/Pages/HomePages";
import Services from "./Components/Pages/Services";
import Footer from "./Components/HomePages/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route  path="/" element={<HomePage/>}/> 
        <Route  path="/Services" element={<Services/>}/> 
            
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
