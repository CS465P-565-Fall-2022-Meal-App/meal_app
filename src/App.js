/** @format */

import logo from './logo.svg';
import React from 'react';

import './App.css';
import Search from './mealDB/search';
import AlphaMenu from './mealDB/alphaMenu';

import MealList from './mealDB/MealList';
import GetMeals from './mealDB/GetMeals';
import StarRating from './ColorApp/StarRating';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StarRating />
      </header>
    </div>
  );
}
