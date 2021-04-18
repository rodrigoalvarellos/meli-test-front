import { SearchResult } from '../interfaces/searchResult';
export const searchService = (search: string): Promise<SearchResult> => {
  return fetch("http://localhost:3500/api/items?q=" + search).then((res) =>
    res.json()
  );
};
