/** @format */

import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useInput } from '../hooks';
import { useMeals } from './MealProvider';

export default function SearchIngredientForm() {
  const [ingredientProps, resetIngredient] = useInput('');
  const { getMeals } = useMeals();
  const submit = (event) => {
    event.preventDefault();
    getMeals(ingredientProps.value);
    resetIngredient();
  };

  return (
    <Form className="" onSubmit={submit}>
      <Form.Group>
        <Form.Label>Search by Ingredient</Form.Label>
        <Form.Control
          className=""
          {...ingredientProps}
          type="text"
          placeholder="enter an ingredient"
          required
        />
        <Button className="">
          <FaSearch />
        </Button>
      </Form.Group>
    </Form>
  );
}
