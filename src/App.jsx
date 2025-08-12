import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blog'
import './App.css'
import { Toaster } from 'react-hot-toast';

// import Download from './component/Download';


function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={true} />

      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<Home />} />
        <Route path= "/blogs" element={<Blogs/>} />
        {/* <Route path="/download" element={<Download />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
