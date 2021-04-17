import { RouteComponentProps } from '@reach/router';
import React, { FC } from 'react'
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { ProductDetail } from '../../components/product-detail/product-detail';

interface IProductPageProps extends RouteComponentProps{}

export const ProductPage: FC<IProductPageProps> = (props) => {
    return (
        <React.Fragment>
            <Breadcrumbs />
            <ProductDetail />
        </React.Fragment>
    )
}
