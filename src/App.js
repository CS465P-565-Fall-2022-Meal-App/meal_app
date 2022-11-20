/** @format */

import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';
import Search from './mealDB/search';
import AlphaMenu from './mealDB/alphaMenu';

import MealList from './mealDB/MealList';
import GetMeals from './mealDB/GetMeals';

import colorData from './ColorApp/color-data.json';
import ColorList from './ColorApp/ColorList';
import StarRating from './mealDB/StarRating';

export default function App() {
  return (
    <div className="App">
      <ColorList colors={colorData} />
    </div>
  );
}
