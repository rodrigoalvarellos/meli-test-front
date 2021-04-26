import React from 'react';
import { SearchBox } from './SearchBox';

const config = {
  title: 'Search Box',

  component: SearchBox
};

export default config;

export const SearchBoxSB: React.FC = () => (
  <div
    style={{
      backgroundColor: '#eeeeee',
      padding: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <SearchBox />
  </div>
);
