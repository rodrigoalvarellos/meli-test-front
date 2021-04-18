import React, { useEffect, useState } from "react";
import { RouteComponentProps, useLocation } from "@reach/router";
import { ListItems } from "../../components/list-items/list-items";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { FC } from "react";
import { parse } from "query-string";
import { searchService } from "../../services/search.services";
import { Loading } from '../../components/loading/loading';
import { SearchResult } from "../../interfaces/searchResult";

interface IResultsPageProps extends RouteComponentProps {}

export const ResultsPage: FC<IResultsPageProps> = (props) => {
  const location = useLocation();

  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<SearchResult>();
  const query: any = parse(location.search);

  useEffect(() => {
    console.log(query.search);
    fetchSearchResult();
  }, []);

  const fetchSearchResult = async () => {
    setLoading(true);
    try {
      const response = await searchService(query.search);
      if (response) {
        setResults(response);
      }
    } catch (error) {}
    setLoading(false);
  };

  if(loading) {
      return <Loading/>
  }


  return (
    <React.Fragment>
      <Breadcrumbs />
      <ListItems items={results?.items} />
    </React.Fragment>
  );
};
