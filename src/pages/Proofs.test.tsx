import React from 'react';

import { render, fireEvent, screen } from '../utils/test-utils';
import '@testing-library/jest-dom/extend-expect';
import { Proofs } from './Proofs';

test('Renders the Proofs', () => {
  render(<Proofs />, {
    initialState: {
      userData: {
        proofs: ['logo512.png', 'logo192.png'],
        shortList: [],
        favourites: [],
      },
    },
  });

  expect(screen.getAllByRole('button', { name: /shortlist/i }).length).toEqual(1);
  expect(screen.getAllByRole('button', { name: /favourite/i }).length).toEqual(1);
  expect(screen.getAllByRole('heading', { name: /shortlist/i }).length).toEqual(1);
  expect(screen.getAllByRole('heading', { name: /favourites/i }).length).toEqual(1);
  expect(screen.getAllByRole('heading', { name: /logo512\.png/i }).length).toEqual(1);
});

test('Proofs page adds to shortlist when shortlist button clicked', () => {
  render(<Proofs />, {
    initialState: {
      userData: {
        proofs: ['logo512.png', 'logo192.png'],
        shortlist: [],
        favourites: [],
      },
    },
  });

  fireEvent.click(screen.getByRole('button', { name: /shortlist/i }));

  expect(screen.getByRole('option', { name: /logo512\.png/i })).toBeInTheDocument();
});

test('Proofs page adds to favourites when favourite button clicked', () => {
  render(<Proofs />, {
    initialState: {
      userData: {
        proofs: ['logo512.png', 'logo192.png'],
        shortlist: [],
        favourites: [],
      },
    },
  });

  fireEvent.click(screen.getByRole('button', { name: /favourite/i }));

  expect(screen.getByRole('option', { name: /logo512\.png/i })).toBeInTheDocument();
});
