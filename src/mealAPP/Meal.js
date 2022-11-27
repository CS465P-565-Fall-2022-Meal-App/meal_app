/** @format */

import React, { useState } from 'react';
import { Button, Card, CloseButton, Image } from 'react-bootstrap';
import { useMeals } from './MealProvider';

export default function Meal({ idMeal, strMeal, strMealThumb }) {
  const { removeMeal, details } = useMeals();
  //const [mealDetails, setMealDetails] = useState({});

  const getMealDetails = (idMeal) => {
    //    setMealDetails(...details.filter((meal) => meal.idMeal === idMeal));
  };

  getMealDetails(idMeal);

  const handleClick = () => {
    console.log('Click: ', details);
  };

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <CloseButton onClick={() => removeMeal(idMeal)} />
        <Card.Title>{strMeal}</Card.Title>
        <Image src={strMealThumb} alt={strMeal} />
        <Button onClick={handleClick}>Details</Button>
      </Card>
    </>
  );
}
