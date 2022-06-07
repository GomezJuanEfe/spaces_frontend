import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Contact/>
      <App/>
  </>
);