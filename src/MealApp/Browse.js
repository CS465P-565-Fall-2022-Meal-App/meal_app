/** @format */

import React from 'react';
import { Nav } from 'react-bootstrap';
import { useMeals } from './MealProvider';

export function Browse(browseType, list, setList) {
  return (
    <div>
      <Nav
        as="ul"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        {list.map((item) => (
          <Nav.Item>
            <Nav.Link eventKey={item}>{item} on</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}
