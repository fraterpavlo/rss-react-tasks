import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

test('renders Home link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByTestId('home-link');
  expect(linkElement).toBeInTheDocument();
});
