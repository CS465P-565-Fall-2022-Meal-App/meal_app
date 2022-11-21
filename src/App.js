/** @format */

import React from 'react';

import './App.css';

import MealList from './mealApp/MealList';
import SearchIngredientForm from './mealApp/SearchIngredientForm';

export default function App() {
  return (
    <div className="App">
      <SearchIngredientForm />
      <MealList />
    </div>
  );
}
