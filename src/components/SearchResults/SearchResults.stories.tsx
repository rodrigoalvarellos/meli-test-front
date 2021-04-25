import React from 'react';
import { SEARCH_RESULTS_MOCK } from '../../mocks/searchResults.mock';
import { SearchResults } from './SearchResults';

const config = {
  title: 'Search Results',
  component: SearchResults
};

export default config;

export const SearchResultsSB: React.FC = () => (
  <SearchResults items={SEARCH_RESULTS_MOCK.items} />
);
