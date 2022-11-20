/** @format */

import React, { useRef } from 'react';

export default function SearchIngredientForm({ onIngredient = (f) => f }) {
  const txtIngredient = useRef();

  const submit = (event) => {
    event.preventDefault();
    const ingredient = txtIngredient.current.value;
    onIngredient(ingredient);
    txtIngredient.current.value = '';
  };
  return (
    <form onSubmit={submit}>
      <input
        ref={txtIngredient}
        type="text"
        placeholder="enter an ingredient"
        required
      />
    </form>
  );
}
