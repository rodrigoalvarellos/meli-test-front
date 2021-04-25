/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState, FC } from 'react';
import { RouteComponentProps, useLocation } from '@reach/router';
import { parse } from 'query-string';

import { Breadcrumbs } from '../../components/xxxBreadcrumbs/xxxBreadcrumbs';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import { SearchIcon } from '../../components/icons/SearchIcon';
import { Loading } from '../../components/xxxLoading/xxxLoading';
import { Card } from '../../components/xxxCard/xxxCard';

import {
  searchItems,
  SearchQueriesParameters
} from '../../services/items.service';

import { SearchResult } from '../../interfaces/searchResult.interface';
import styles from './ResultsPage.module.scss';
import texts from '../../config/text.config.json';

interface IResultsPageProps extends RouteComponentProps {
  setMetaTags: Function;
}
/**
 * This component is responsible for obtaining the search results from the backend
 * and rendering the list of items and the breadcrumb. *
 */
export const ResultsPage: FC<IResultsPageProps> = ({
  setMetaTags,
  ...props
}) => {
  const rsTexts = texts.results_page;
  const location = useLocation();

  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<SearchResult | null>();
  const query: SearchQueriesParameters = parse(location.search);

  useEffect(() => {
    fetchSearchResult();
  }, [query.search, query.category]);

  const fetchSearchResult = async () => {
    setLoading(true);
    try {
      const response = await searchItems(query);
      if (response && response.status === 200) {
        const data: SearchResult = await response.json();
        setResults(data);

        const categoriesString = data.categories
          .map((cat) => cat.name)
          .join(',');

        setMetaTags({
          title: `${texts.header_meta_tags.title} - ${
            query.search ? query.search : categoriesString
          }`,
          description: `${texts.header_meta_tags.title} - ${
            query.search ? query.search : categoriesString
          }`,
          keywords: categoriesString
        });
      } else {
        setResults(null);
      }
    } catch (error) {
      setResults(null);
    }
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  if (results === null) {
    return (
      <div className={styles.ResultsPage__not_found}>
        <Card>
          <div className={styles.ResultsPage__not_found_content}>
            <SearchIcon fill="#999999" />
            <p>
              {rsTexts.search_not_found} : <strong>"{query.search}"</strong>
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs categories={results?.categories || []} />
      <SearchResults items={results?.items} />
    </>
  );
};
