/** @format */

import React, { useState } from 'react';

export default function AddColorForm({ onNewColor = (f) => f }) {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#000000');

  const submit = (event) => {
    event.preventDefault();
    onNewColor(title, color);
    setTitle('');
    setColor('');
  };
  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="color title..."
        required
      />
      <input
        value={color}
        onChange={(event) => setTitle(event.target.value)}
        type="color"
        required
      />
    </form>
  );
}
