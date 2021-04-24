import { RouteComponentProps } from "@reach/router";
import { FC, HTMLAttributes } from "react";
import { SearchItem } from "../SearchItem/SearchItem";
import styles from "./SearchResults.module.scss"; // Import css modules stylesheet as styles
import { Item } from "../../interfaces/searchResult.interface";

export const DATA_TESTID = "SEARCH_LIST_TESTID";

export interface ISearchResultsProps
  extends HTMLAttributes<HTMLDivElement>,
    RouteComponentProps {
  items?: Item[];
}

/**
 * This component renders the list of items obtained from the product search.
 * @param items[]
 */
export const SearchResults: FC<ISearchResultsProps> = ({ items, ...props }) => {
  return (
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
};
