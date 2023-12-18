import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// css 
import "./assets/css/default.css"
// pages 
import About from "./pages/about"
// components
import Menu from "./components/menu"

function App() {


  return (
    <Router>
      <Menu/>
      <Routes>

        <Route path="/" element={
          <About />
        } />
        <Route path="/sla" element={
          <About />
        } />
      </Routes>
    </Router>
  );
}

export default App;
