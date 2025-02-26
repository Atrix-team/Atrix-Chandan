import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
// import Home from './Pages/Home.jsx';
// const root = ReactDOM.createRoot(document.getElementById('root'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
 
    {/* <Home /> */}
 
  </StrictMode>,
)
