/** @format */

import React from 'react';
import { render } from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MealProvider from './MealApp/MealProvider';

// to check for duplicate versions of react
window.React1 = require('react');

render(
  <MealProvider>
    <App />
  </MealProvider>,

  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
