import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import InfoNav from "./components/InfoNav";
import Interests from "./components/Interests";
import Login from "./components/Login";
import MiniNav from "./components/MiniNav";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import VerifyOtp from "./components/VerifyOtp";

function App() {
  return (
    <BrowserRouter>
      <MiniNav />
      <Navbar />
      <InfoNav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
