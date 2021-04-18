import React, { useEffect, useState } from "react";
import { RouteComponentProps, useLocation } from "@reach/router";
import { ListItems } from "../../components/list-items/list-items";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { FC } from "react";
import { parse } from "query-string";
import { searchItems, SearchQueriesParameters } from "../../services/items.service";
import { Loading } from '../../components/loading/loading';
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
      <ListItems items={results?.items} />
    </React.Fragment>
  );
};
