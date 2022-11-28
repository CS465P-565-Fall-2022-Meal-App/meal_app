/** @format */

import React from 'react';

import './App.css';

import MealList from './MealApp/MealList';
import SearchIngredientForm from './MealApp/SearchIngredientForm';

export default function App() {
  return (
    <div className="App">
      <SearchIngredientForm />
      <MealList />
    </div>
  );
}
