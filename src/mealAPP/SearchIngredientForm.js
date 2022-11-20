/** @format */

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useInput } from './hooks';

export default function SearchIngredientForm({ onIngredient = (f) => f }) {
  const [ingredientProps, resetIngredient] = useInput('');

  const submit = (event) => {
    event.preventDefault();
    onIngredient(ingredientProps.value);
    resetIngredient();
  };
  return (
    <form onSubmit={submit}>
      <input
        {...ingredientProps}
        type="text"
        placeholder="enter an ingredient"
        required
      />
      <button>
        <FaSearch />
      </button>
    </form>
  );
}
