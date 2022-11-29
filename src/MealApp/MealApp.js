/** @format */

import React from 'react';

import './MealApp.css';
import MealList from './MealList';
import {
  ALPHA,
  BASE_URL_ALPHA,
  BASE_URL_INGREDIENT_SEARCH,
  BASE_URL_MEAL_NAME_SEARCH,
} from './MealProvider';
import MealSearch from './MealSearch';
import Browse from './Browse';

export default function MealApp() {
  return (
    <div className="MealApp">
      <MealSearch
        baseURL={BASE_URL_INGREDIENT_SEARCH}
        searchType={'an Ingredient'}
      />
      <MealSearch
        baseURL={BASE_URL_MEAL_NAME_SEARCH}
        searchType={'a Meal Name'}
      />
      <Browse list={ALPHA} url={BASE_URL_ALPHA} />

      <MealList />
    </div>
  );
}
