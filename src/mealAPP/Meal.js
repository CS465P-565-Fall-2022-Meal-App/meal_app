/** @format */

import React from 'react';
import { Button, Card, CloseButton, Image } from 'react-bootstrap';
import { useMeals } from './MealProvider';

export default function Meal({ idMeal, strMeal, strMealThumb }) {
  const { removeMeal, details, getDetails } = useMeals();

  const handleClick = () => {
    getDetails(idMeal);
    console.log('Click: ', details);
  };

  return (
    <>
      <Card className="card" style={{ width: '18rem' }}>
        <CloseButton className="close-btn" onClick={() => removeMeal(idMeal)} />
        <Card.Title className="card-title">{strMeal}</Card.Title>
        <Image className="card-thumb" src={strMealThumb} alt={strMeal} />
        <Button className="card-detail-btn" onClick={handleClick}>
          Details
        </Button>
      </Card>
    </>
  );
}
