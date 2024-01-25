import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';

const App: React.FC = () => {
  return (
    <Router>
      <main>
      <Routes>
      <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<AuthPage />} />
          </Routes>
      </main>
    </Router>
  );
};

export default App;
