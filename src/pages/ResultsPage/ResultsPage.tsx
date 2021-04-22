import React, { useEffect, useState } from "react";
import { RouteComponentProps, useLocation } from "@reach/router";
import { SearchResults } from "../../components/SearchResults/SearchResults";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { FC } from "react";
import { parse } from "query-string";
import { searchItems, SearchQueriesParameters } from "../../services/items.service";
import { Loading } from '../../components/Loading/Loading';
import { SearchResult } from "../../interfaces/searchResult.interface";

interface IResultsPageProps extends RouteComponentProps {}

export const ResultsPage: FC<IResultsPageProps> = (props) => {
  const location = useLocation();

  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<SearchResult>();
  const query:SearchQueriesParameters = parse(location.search);

  useEffect(() => {
    fetchSearchResult();
  }, [query.search, query.category]);

  const fetchSearchResult = async () => {
    setLoading(true);
    try {
      const response = await searchItems(query);
      if (response) {
        setResults(response);
      }
    } catch (error) {
      // TODO
    }
    setLoading(false);
  };

  if(loading) {
      return <Loading/>
  }


  return (
    <React.Fragment>
      <Breadcrumbs categories={results?.categories || []}/>
      <SearchResults items={results?.items} />
    </React.Fragment>
  );
};
