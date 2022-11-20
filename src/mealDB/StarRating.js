/** @format */

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
  return (
    <div>
      {createArray(totalStars).map((num, index) => (
        <Star key={index} selected={selectedStars > index} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
);
