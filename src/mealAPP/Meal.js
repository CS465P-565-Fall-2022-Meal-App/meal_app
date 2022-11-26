/** @format */

import React from 'react';
import { Button, Card, CloseButton, Image } from 'react-bootstrap';
import { useMeals } from './MealProvider';

export default function Meal({ idMeal, strMeal, strMealThumb }) {
  const { removeMeal, showDetails } = useMeals();
  return (
    <Card style={{ width: '18rem' }}>
      <CloseButton onClick={() => removeMeal(idMeal)} />
      <Card.Title>{strMeal}</Card.Title>
      <Image src={strMealThumb} alt={strMeal} />
      <Button onClick={() => showDetails(idMeal)}>Details</Button>
    </Card>
  );
}
