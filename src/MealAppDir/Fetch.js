/** @format */

import React, { useState, useEffect } from 'react';

// Borrowed and modified code from Learning React, Chapter 8.
export function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    fetch(url)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [url]);

  return {
    loading,
    data,
    error,
  };
}

export default function Fetch({
  base,
  param,
  renderSuccess,
  loadingFallback = <p>loading...</p>,
  renderError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) {
  const url = `${base}${param}`;
  console.log(base, param, url);
  const { loading, data, error } = useFetch(url);
  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
}
