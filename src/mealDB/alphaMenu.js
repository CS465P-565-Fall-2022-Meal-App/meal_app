/** @format */
import React from 'react';

const ALPHA = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export default class AlphaMenu extends React.Component {
  render() {
    return (
      <ul>
        {ALPHA.map((letter, index) => (
          <li key={index}>
            <a href={`/?letter=${letter}`}>{letter}</a>
          </li>
        ))}
      </ul>
    );
  }
}
