import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders the HOME switch-route', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const linkElement = getByText(/HOME/i);
  expect(linkElement).toBeInTheDocument();
});
