import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/CommonPages/Navbar";
import HomePage from "./Components/Pages/HomePages";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route  path="/" element={<HomePage/>}/> 
            
      </Routes>
    </>
  );
};

export default App;
