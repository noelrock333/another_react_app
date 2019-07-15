import React from 'react';
import './App.css';
import AppRoutes from './router';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
