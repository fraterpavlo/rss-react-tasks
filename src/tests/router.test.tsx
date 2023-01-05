import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

describe('TEST APP', () => {
  test('Router test', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homePageLink = screen.getByTestId('home-link');
    const aboutPageLink = screen.getByTestId('about-link');
    userEvent.click(aboutPageLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    userEvent.click(homePageLink);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  test('Error page test', () => {
    render(
      <MemoryRouter initialEntries={['/wrongLink']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
