// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyComponent from './MyComponent';

test('renders component with correct text', () => {
  const { getByText } = render(<MyComponent text="Hello, World!" />);
  const textElement = getByText(/Hello, world!/i);
  expect(textElement).toBeInTheDocument();
});
