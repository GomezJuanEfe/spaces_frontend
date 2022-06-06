import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import OurClients from './components/OurClients';
import Header from './components/Header';
import Logo from './components/Logo';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <Logo/>
    <About/>
    <OurClients/>
  </>
);
