/** @format */

import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useMeals } from './mealDB/meal-hooks';
import MealProvider from './mealDB/MealProvider';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { render } from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
