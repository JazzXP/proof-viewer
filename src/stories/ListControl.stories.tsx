import React from 'react';
import { ListControl } from '../components/ListControl';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Controls',
  component: ListControl,
};

const items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10'];

export const List = () => (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <div style={{ height: '100px', width: '50px' }}>
      <ListControl items={items} />
    </div>
  </ThemeProvider>
);
