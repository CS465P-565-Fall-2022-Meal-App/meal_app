/** @format */

import React from 'react';

import './MealApp.css';

import MealList from './MealApp/MealList';
import SearchIngredientForm from './MealApp/SearchIngredientForm';

export default function App() {
  return (
    <div className="MealApp">
      <SearchIngredientForm />
      <MealList />
    </div>
  );
}
