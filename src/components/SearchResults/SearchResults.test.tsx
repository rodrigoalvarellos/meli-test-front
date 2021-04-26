import { getByTestId, render } from '@testing-library/react';
import { DATA_TESTID, SearchResults } from './SearchResults';
import { SEARCH_RESULTS_MOCK } from '../../mocks/searchResults.mock';

describe('Search Results test suit', () => {
  test('should be rendered succesfully', () => {
    const { container } = render(
      <SearchResults items={SEARCH_RESULTS_MOCK.items} />
    );
    const pd = getByTestId(container, DATA_TESTID);
    expect(pd).toBeTruthy();
  });

  test('should have 4 items ', () => {
    const { container } = render(
      <SearchResults items={SEARCH_RESULTS_MOCK.items} />
    );

    const liElements = container.querySelectorAll('li');
    expect(liElements).toHaveLength(4);
  });

  test('First result element should have an specific title ', () => {
    const { container } = render(
      <SearchResults items={SEARCH_RESULTS_MOCK.items} />
    );

    const liElements = container.querySelectorAll('li');
    expect(liElements[0]).toHaveTextContent(SEARCH_RESULTS_MOCK.items[0].title);
  });
});
