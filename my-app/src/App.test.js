import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
// import { foulButton } from "./components/Dashboard" 

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   getByText(/learn react/i);
// });

// test("foulButton adds 1", () => {
//   // ARRANGE
//   const StrikeCount = 0;
//   const expected = 1;

//   // ACT
//   const actual = foulButton();

//   // ASSERT
//   expect(actual).toBe(expected);
// });

test("contains hit button", () => {
  // ARRANGE
  const { getAllByText } = render(<App />);
  const expected = 1;

  //  console.log(container);

  // ACT
  const result = getAllByText(/hit/i);

  // ASSERT
  expect(result.length).toBe(expected);
});

test("contains balls-h2", () => {
  const { getByTestId } = render (<App />);

  getByTestId("balls-h2");
});