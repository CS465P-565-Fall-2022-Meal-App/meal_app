/** @format */

import React from 'react';
import { Button, Card, CloseButton, Image } from 'react-bootstrap';
import { useMeals } from './MealProvider';
import RecipeModal from '../MyComponents/RecipeModal';

export default function Meal({ idMeal, strMeal, strMealThumb }) {
  const { removeMeal } = useMeals();
  const [modalShow, setModalShow] = React.useState(false);

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
        <Button
          className="card-detail-btn btn m-2 mx-5"
          onClick={() => setModalShow(true)}
        >
          Tap for Details
        </Button>
        <RecipeModal
          id={idMeal}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Card>
    </>
  );
}
