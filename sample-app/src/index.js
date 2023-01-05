import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Library from './Chapter03/Library';
import Clock from './Chapter_Elements/Clock';


const root = ReactDOM.createRoot(document.getElementById('root'));
/**
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);
**/

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();