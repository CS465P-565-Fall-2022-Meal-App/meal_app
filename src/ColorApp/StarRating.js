/** @format */

import React from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = (length) => [...Array(length)];

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate = (f) => f,
}) {
  return (
    <>
      {createArray(totalStars).map((num, index) => (
        <Star
          key={index}
          selected={selectedStars > index}
          onSelect={() => onRate(index + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
);
