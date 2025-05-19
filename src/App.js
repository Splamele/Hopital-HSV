import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import DashboardPage from './pages/DashboardPage';

function App() {
 return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
