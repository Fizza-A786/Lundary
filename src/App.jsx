import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/CommonPages/Navbar";
import HomePage from "./Pages/HomePages";
import Services from "./Pages/Services";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import AboutPage from "./Pages/AboutPage";
import Contactus from "./Pages/Contactus";
import Footer from "./Components/CommonPages/Footer";
import VisionMission from "./Pages/VisionMission";
import BookingDashboard from "./Dashboard/BookingDashboard";

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
        <Route path="/VisionMission" element={<VisionMission/>} /> 
        <Route path="/contactus" element={<Contactus/>} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignupPage />} /> 
        <Route path="/BookingDashboard" element={<BookingDashboard/>} /> 

      </Routes>

      {!hideNavFooter && <Footer/>} 
    </>
  );
};

export default App;