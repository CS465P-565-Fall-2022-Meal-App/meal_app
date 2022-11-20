/** @format */

import React, { createContext, useState, useContext } from 'react';
import mealData from './meal-data.json';

const MealContext = createContext();
export const useMeals = () => useContext(MealContext);
