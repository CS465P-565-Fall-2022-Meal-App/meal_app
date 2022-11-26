/** @format */

import { render, screen } from '@testing-library/react';
import App from './App';

import { useMeals, meals, setMeals } from './MealApp/MealProvider';
import { TEST_MEAL_LIST_1 } from './MealApp/testData';

test('renders learn react link', () => {
  //  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
{
  describe('testing MealProvider functions', () => {
    it('should be empty', () => {
      expect(meals).toEqual();
    });
  });
}
