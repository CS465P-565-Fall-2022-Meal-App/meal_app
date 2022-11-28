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
      <Card className="card">
        <div className="card-header">
          <CloseButton
            aria-label="Remove from list"
            className="close-btn"
            onClick={() => removeMeal(idMeal)}
          />
          <Card.Title className="card-title">{strMeal}</Card.Title>
        </div>
        <Image className="card-thumb" src={strMealThumb} alt={strMeal} />
        <Button className="card-detail-btn m-2 mx-5" onClick={handleClick}>
          Details
        </Button>
      </Card>
    </>
  );
}
