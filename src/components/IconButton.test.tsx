import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IconButton } from './IconButton';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

test('Renders the IconButton', () => {
  render(
    <IconButton icon={faCoffee} onClick={() => {}}>
      Test
    </IconButton>
  );

  expect(screen.getByRole('button', { name: /test/i })).toBeInTheDocument();
});

test('IconButton calls function when clicked', () => {
  const action = jest.fn();
  render(
    <IconButton
      icon={faCoffee}
      onClick={() => {
        action();
      }}
    >
      Test
    </IconButton>
  );

  fireEvent.click(screen.getByRole('button', { name: /test/i }));

  expect(action).toBeCalledTimes(1);
});
