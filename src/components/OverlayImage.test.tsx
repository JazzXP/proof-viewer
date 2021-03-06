import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IconButton } from './IconButton';
import { OverlayImage } from './OverlayImage';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

test('Renders the OverlayImage', () => {
  render(
    <OverlayImage imageUrl="logo512.png">
      <IconButton icon={faCoffee} onClick={() => {}}>
        Test
      </IconButton>
    </OverlayImage>
  );

  expect(screen.getByRole('button', { name: /test/i })).toBeInTheDocument();
});

test('OverlayImage calls function when clicked', () => {
  const action = jest.fn();
  render(
    <OverlayImage imageUrl="logo512.png">
      <IconButton
        icon={faCoffee}
        onClick={() => {
          action();
        }}
      >
        Test
      </IconButton>
    </OverlayImage>
  );
  fireEvent.click(screen.getByRole('button', { name: /test/i }));
  expect(action).toBeCalledTimes(1);
});
