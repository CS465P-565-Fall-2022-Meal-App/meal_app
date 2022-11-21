/** @format */

import React from 'react';

import './App.css';

import ColorList from './ColorApp/ColorList';
import AddColorForm from './ColorApp/AddColorForm';

import MealList from './mealApp/MealList';
import SearchIngredientForm from './mealApp/SearchIngredientForm';

export default function App() {
  return (
    <div className="App">
      <AddColorForm />
      <ColorList />
      <SearchIngredientForm />
      <MealList />
    </div>
  );
}
