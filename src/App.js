import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import Body from "./MyComponents/Body";
import Footer from "./MyComponents/Footer";
import React, { useState } from "react";
//import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import Home from "./MyComponents/Home";
import About from "./MyComponents/About";
import Contactus from "./MyComponents/Contactus";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/" element={<Body/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
