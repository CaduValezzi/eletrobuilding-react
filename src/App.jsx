import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// css 
import "./assets/css/default.css"
// pages 
import { About }  from "./pages/about"
import { Contact }  from "./pages/contact";
import { NotFound } from "./pages/notfound"
// components
import { AnimatedMenu } from "./components/animated_menu"
import { FooterMenu } from "./components/footer_menu";

function App() {

  return (
    
    <Router>
      <AnimatedMenu/>
      <Routes>
        <Route path="/" element={
          <About />
        } />
        <Route path="/index" element={
          <About />
        } />
        <Route path="/contact" element={
          <Contact />
        } />
        <Route path="*" element={
          <NotFound/>
        }/>
      </Routes>
      <FooterMenu/>
    </Router>
  );
}

export default App;
