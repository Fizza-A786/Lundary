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
import ScrollToTop from "./Pages/Scrolltotop";
import ClothesSelection from "./Dashboard/ClothesSelection";
import Step3ExtraServices from "./Dashboard/Step3ExtraServices";
import Step4Pickup from "./Dashboard/Step4Pickup";
import Final from "./Dashboard/Final";

const App = () => {
  const location = useLocation();
  const hideNavFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {/* Scroll to top component */}
      <ScrollToTop />

      {!hideNavFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/VisionMission" element={<VisionMission />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/BookingDashboard" element={<BookingDashboard />} />
        <Route path="/clothes-selection" element={<ClothesSelection/>} />
        <Route path="/next-step" element={<Step3ExtraServices/>} />
        <Route path="/step4" element={<Step4Pickup/>} />
        <Route path="/step5" element={<Final/>} />

      </Routes>

      {!hideNavFooter && <Footer />}
    </>
  );
};

export default App;