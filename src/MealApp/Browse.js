/** @format */

import React from 'react';
import { Nav } from 'react-bootstrap';
import { useMeals } from './MealProvider';

export default function Browse({ list, url }) {
  const { getMeals } = useMeals();

  return (
    <div>
      <Nav as="ul" onSelect={(selectedKey) => getMeals(url, selectedKey)}>
        {list.map((item) => (
          <Nav.Item>
            <Nav.Link eventKey={item}>{item}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}
