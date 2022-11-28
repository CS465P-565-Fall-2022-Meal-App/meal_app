/** @format */

import React from 'react';

import './MealApp.css';

import MealList from './MealList';
import MealIngredientSearch from './MealIngredientSearch';

export default function MealApp() {
  return (
    <div className="MealApp">
      <MealIngredientSearch />
      <MealList />
    </div>
  );
}
