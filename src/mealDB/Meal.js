/** @format */

import React from 'react';

import { useMeals } from './meal-hooks';

export default function Meal({ id, name, thumb }) {
  const { showDetails } = useMeals();
  return (
    <section className="meal-card">
      <h2>{name}</h2>
      <img src={require(thumb)} alt={name} />
      <button onClick={() => showDetails(id)}>Details</button>
    </section>
  );
}
