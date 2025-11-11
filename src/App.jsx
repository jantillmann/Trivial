import { useState } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Question from './pages/Question';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Results from './pages/Results';
// import { Navigate } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="" element={<Homepage />} />
      <Route path="/question/:questionId" element={<Question />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default App;
