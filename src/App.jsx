import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/CommonPages/Navbar";
import HomePage from "./Components/Pages/HomePages";
import Services from "./Components/Pages/Services";
import Footer from "./Components/HomePages/Footer";
import LoginPage from "./Components/Pages/LoginPage";
import SignupPage from "./Components/Pages/SignupPage";
import BookNowPage from "./Components/Pages/BookNowPage";
import AboutPage from "./Components/Pages/AboutPage";

const App = () => {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavFooter && <Navbar />} 

      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/Services" element={<Services />} /> 
        <Route path="/About" element={<AboutPage/>} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignupPage />} /> 
        <Route path="/Booknow" element={<BookNowPage/>} /> 
      </Routes>

      {!hideNavFooter && <Footer />} 
    </>
  );
};

export default App;