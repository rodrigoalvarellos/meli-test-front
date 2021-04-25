import React from 'react';
import { SEARCH_RESULTS_MOCK } from '../../mocks/searchResults.mock';
import { SearchItem } from './SearchItem';

const config = {
  title: 'Search Item',
  component: SearchItem
};

export default config;

export const SearchItemSB: React.FC = () => (
  <div
    style={{
      backgroundColor: '#FFFFFF',
      padding: '50px',
      //   display: 'flex',
      width: '850px'
    }}
  >
    <SearchItem item={SEARCH_RESULTS_MOCK.items[0]} />
  </div>
);
