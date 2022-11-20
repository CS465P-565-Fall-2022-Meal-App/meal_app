/** @format */

import React, { useState } from 'react';

import './App.css';

import colorData from './ColorApp/color-data.json';
import ColorList from './ColorApp/ColorList';

import mealData from './mealAPP/meal-data.json';
import MealList from './mealAPP/MealList';

export default function App() {
  const [colors, setColors] = useState(colorData);
  const [meals, setMeals] = useState(mealData);
  return (
    <div className="App">
      <ColorList
        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color,
          );
          setColors(newColors);
        }}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
      />
      <MealList
        meals={meals}
        onRemoveMeal={(idMeal) => {
          const newMeals = meals.filter((meal) => meal.idMeal !== idMeal);
          setMeals(newMeals);
        }}
      />
    </div>
  );
}
