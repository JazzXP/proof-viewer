import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HorizontalThumbnailList } from './HorizontalThumbnailList';

const thumbnailList = [
  'examples/daisies-5232284_1920.jpg',
  'examples/house-5237592_1920.jpg',
  'examples/the-road-815297_1920.jpg',
  'examples/tour-eiffel-5210486_1920.jpg',
  'examples/girl-5259353_1920.jpg',
  'examples/woman-837156_1920.jpg',
];

test('Renders the HorizontalThumbnailList', () => {
  render(<HorizontalThumbnailList thumbnails={thumbnailList} current={thumbnailList[0]} />);

  expect(screen.getAllByRole('button').length).toBe(thumbnailList.length - 1); // current selected isn't a button
});

test('HorizontalThumbnailList calls function when clicked', () => {
  const action = jest.fn();
  render(<HorizontalThumbnailList thumbnails={thumbnailList} current={thumbnailList[0]} onClick={action} />);

  fireEvent.click(screen.getAllByRole('button')[0]);

  expect(action).toBeCalledTimes(1);
});
