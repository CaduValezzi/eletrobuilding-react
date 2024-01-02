import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// css 
import "./assets/css/default.css"
// pages 
import { About } from "./pages/about"
import { Contact } from "./pages/contact";
import { EletricEngineering } from "./pages/eletricengineering";
import { EletronicSecurity } from "./pages/eletronicsecurity";
import { SolarEnergy } from "./pages/solarenergy";
import { Blog } from "./pages/blog";

import { NotFound } from "./pages/notfound"
// components
import { AnimatedMenu } from "./components/animated_menu"
import { FooterMenu } from "./components/footer_menu";


function App() {

  return (

    <Router>
      <AnimatedMenu />
      <Routes>
        <Route path="/" element={
          <About />
        } />
        <Route path="/index" element={
          <About />
        } />
        <Route path="/eletricengineering" element={ 
          <EletricEngineering/>
        }/>
        <Route path="/solarenergy" element={ 
          <SolarEnergy/>
        }/>
        <Route path="/eletronicsecurity" element={ 
          <EletronicSecurity/>
        }/>
        <Route path="/contact" element={
          <Contact />
        } />
        <Route path="/blog" element={
          <Blog />
        } />
        <Route path="*" element={
          <NotFound />
        } />
      </Routes>
      <FooterMenu />
    </Router>
  );
}

export default App;
