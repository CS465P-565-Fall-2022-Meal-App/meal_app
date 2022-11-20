/** @format */

import React, { useState } from 'react';

export default function SearchIngredientForm({ onIngredient = (f) => f }) {
  const [ingredient, setIngredient] = useState('');

  const submit = (event) => {
    event.preventDefault();
    onIngredient(ingredient);
    setIngredient('');
  };
  return (
    <form onSubmit={submit}>
      <input
        value={ingredient}
        onChange={(event) => setIngredient('')}
        type="text"
        placeholder="enter an ingredient"
        required
      />
    </form>
  );
}
