/** @format */

import { FaTrash } from 'react-icons/fa';

export default function Meal({
  idMeal,
  strMeal,
  strMealThumb,
  onRemove = (f) => f,
}) {
  return (
    <section>
      <h1>{strMeal} </h1>

      <img src={strMealThumb} alt={strMeal} />
      <button onClick={() => onRemove(idMeal)}>
        <FaTrash />
      </button>
    </section>
  );
}
