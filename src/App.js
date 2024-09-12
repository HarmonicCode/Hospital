import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Updated import statement
import Login from './components/Login';
import './App.css';
import Home from './components/Pages/Home';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Updated Route syntax */}
        <Route path="/Login" element={<Login />} /> {/* Add more routes as needed */}
       
      </Routes>
    </Router>
  );
}




export default App;
