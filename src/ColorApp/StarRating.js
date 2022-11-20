/** @format */

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars] = useState(3);
  return (
    <>
      {createArray(totalStars).map((num, index) => (
        <Star key={index} selected={selectedStars > index} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

const Star = ({ selected = false }) => (
  <FaStar color={selected ? 'red' : 'grey'} />
);
