import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { ListItems } from '../../components/list-items/list-items'
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs'
import { FC } from 'react';

interface IResultsPageProps extends RouteComponentProps {}

export const ResultsPage:FC<IResultsPageProps> = (props) => {
    return (
        <React.Fragment>
            <Breadcrumbs />
            <ListItems />
        </React.Fragment>
    )
}
