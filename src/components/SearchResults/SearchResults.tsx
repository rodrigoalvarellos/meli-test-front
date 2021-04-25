import { FC, HTMLAttributes } from 'react';
import { RouteComponentProps } from '@reach/router';

import { SearchItem } from '../SearchItem/SearchItem';
import { Item } from '../../interfaces/searchResult.interface';

import styles from './SearchResults.module.scss'; // Import css modules stylesheet as styles

export const DATA_TESTID = 'SEARCH_LIST_TESTID';

export interface ISearchResultsProps
  extends HTMLAttributes<HTMLDivElement>,
    RouteComponentProps {
  items?: Item[];
}

/**
 * This component renders the list of items obtained from the product search.
 * @param items[]
 */
export const SearchResults: FC<ISearchResultsProps> = ({ items, ...props }) => (
  <div className={styles.SearchResults} {...props} data-testid={DATA_TESTID}>
    <ul className={styles.SearchResults__list}>
      {items?.map((item) => (
        <li key={item.id}>
          <SearchItem item={item} />
        </li>
      ))}
    </ul>
  </div>
);
