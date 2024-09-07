import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Updated import statement
import './App.css';
import Home from './components/Pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes> {/* Changed from Switch to Routes */}
          <Route path="/" exact component={Home} /> {/* Updated Route syntax */}
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
