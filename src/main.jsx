import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Slider from './slider.jsx'
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Slider/>
  </React.StrictMode>,
);
