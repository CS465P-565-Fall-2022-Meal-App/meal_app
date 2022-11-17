/** @format */

/**
 * This code is incomplete and should not be used unless updated to resolve issues.
 * It constantly fetches data and results do not always arrive.
 *
 * This code is kept for posterity.
 */

/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';

export default function IngredientSearch() {
  const [text, setText] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchURL, setURL] = useState(null);

  const searchIngredient = (event) => {
    if (text.localeCompare(event.target.value) !== 0)
      setText(event.target.value);
    if (event.target.value) {
      setURL(`${baseURL}${event.target.value}`);
    } else {
      setURL('');
    }
  };

  useEffect(() => {
    console.log('URL: ', searchURL);
    console.log(text);

    axios(searchURL)
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      })
      .finally(() => {});
  });

  return (
    <form>
      <input
        className="form-control"
        id="ingredientInput"
        type="text"
        name="ingredientInput"
        onChange={searchIngredient}
      />
      <p>Searching for {text}...</p>
    </form>
  );
}
*/
