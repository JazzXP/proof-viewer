import React from 'react';
import { Proofs } from '../pages';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect } from '@storybook/addons';
import { setImageList } from '../state/UserData-actions';

export default {
  title: 'Pages',
  component: Proofs,
};

export const ProofsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setImageList([
        'examples/daisies-5232284_1920.jpg',
        'examples/house-5237592_1920.jpg',
        'examples/the-road-815297_1920.jpg',
        'examples/tour-eiffel-5210486_1920.jpg',
        'examples/girl-5259353_1920.jpg',
        'examples/woman-837156_1920.jpg',
      ])
    );
  }, [dispatch]);

  return (
    <ThemeProvider theme={{ mode: 'dark' }}>
      <Proofs />
    </ThemeProvider>
  );
};
