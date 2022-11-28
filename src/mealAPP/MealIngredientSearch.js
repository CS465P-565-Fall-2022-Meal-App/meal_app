/** @format */

import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useInput } from '../hooks';
import { useMeals } from './MealProvider';

export default function MealIngredientSearch() {
  const [ingredientProps, resetIngredient] = useInput('');
  const { getMeals } = useMeals();
  const submit = (event) => {
    event.preventDefault();
    getMeals(ingredientProps.value);
    resetIngredient();
  };

  return (
    <Form onSubmit={submit}>
      <Form.Group className="mb-3 container">
        <Form.Label className="visually-hidden">
          Search by Ingredient
        </Form.Label>
        <Form.Control
          className=""
          {...ingredientProps}
          type="text"
          placeholder="Enter an ingredient"
          required
        />
        <Button className="">
          <FaSearch />
        </Button>
      </Form.Group>
    </Form>
  );
}
