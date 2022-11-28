import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import Body from "./MyComponents/Body";
import Footer from "./MyComponents/Footer";
import React, { useState } from "react";
//import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import Home from "./MyComponents/Home";
import About from "./MyComponents/About";
import Contactus from "./MyComponents/Contactus";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contactus">
            <Contactus />
          </Route>
          <Route path="/">
            <Body />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
