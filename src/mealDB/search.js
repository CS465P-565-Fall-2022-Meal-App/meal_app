/** @format */
import React, { useState } from 'react';
const mealList = [];

// TODO - figure out why list won't render
class Search extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ul>
          {mealList.map((post) => (
            <li key={post.key}>{post.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const SearchBar = () => {
  const [ingredient, setIngredient] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    getMealList(ingredient);
  };

  function getMealList(ingredient) {
    console.log(ingredient);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          data.meals.forEach((meal) => {
            const id = meal.idMeal;
            const thumb = meal.strMealThumb;
            const name = meal.strMeal;
            console.log(id, name, thumb);
            mealList.push({
              id,
              name,
              thumb,
            });
          });
        }
      });
  }
  return (
    <div class="meal-search-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          class="search-control"
          placeholder="Enter an ingredient"
          id="search-input"
          name="ingredient"
          onChange={(event) => setIngredient(event.target.value)}
        />
        <button type="submit" class="search-btn btn" id="search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
