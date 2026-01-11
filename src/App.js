import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import AboutMe from './pages/AboutMe';
import Research from './pages/Research';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/about-me" replace />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/research1" element={<Research researchId="research1" />} />
            <Route path="/research2" element={<Research researchId="research2" />} />
            <Route path="/research3" element={<Research researchId="research3" />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;




