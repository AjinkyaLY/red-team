import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';
import Hero from './Hero.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Hero />
  </React.StrictMode>,
);
