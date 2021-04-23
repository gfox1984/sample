import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders instructions', () => {
  render(<App />);
  const paragraph = screen.getByText(/who would you like to greet?/i);
  expect(paragraph).toBeInTheDocument();
});
