/** @format */

import React, { useState } from 'react';

import './App.css';

import colorData from './ColorApp/color-data.json';
import ColorList from './ColorApp/ColorList';

import mealData from './mealAPP/meal-data.json';
import MealList from './mealAPP/MealList';

export default function App() {
  return (
    <div className="App">
      <ColorList colors={colorData} />
      <MealList meals={mealData} />
    </div>
  );
}
