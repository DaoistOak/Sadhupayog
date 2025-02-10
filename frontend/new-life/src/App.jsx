import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home'; // Correct the import path
import Buyer from './component/Buyer';
import LoginPage from './component/LoginPage';
import Cold from './component/Cold';
import User from './component/User';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Cold" element={<Cold />} />
        <Route path="/User" element={<User/>} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
