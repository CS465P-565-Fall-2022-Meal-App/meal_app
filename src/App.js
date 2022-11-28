/** @format */

import './App.css';
import Header from './MyComponents/Header';
import Body from './MyComponents/Body';
import Footer from './MyComponents/Footer';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './MyComponents/About';
import Contactus from './MyComponents/Contactus';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/" element={<Body />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
