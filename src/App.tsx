// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './MenuBar';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import HorseDetailsPage from './HorseDetailsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <div style={{ marginRight: '200px', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/sign-in" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/horse-details" element={<HorseDetailsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
