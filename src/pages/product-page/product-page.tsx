import { navigate, RouteComponentProps } from "@reach/router";
import React, { FC, useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Loading } from "../../components/loading/loading";
import { ProductDetail } from "../../components/product-detail/product-detail";
import { getProductoDetail } from "../../services/items.service";
import { ProductDetailItem } from '../../interfaces/product-detail.iterface';

interface IProductPageProps extends RouteComponentProps {
  itemId?: string;
}

export const ProductPage: FC<IProductPageProps> = ({ itemId, ...props }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductDetailItem>();

  useEffect(() => {
    fetchProductDetailResult();
  }, [itemId]);

  const fetchProductDetailResult = async () => {
    setLoading(true);
    try {
      if (itemId) {
        const response = await getProductoDetail(itemId);        
        if (response) {
          setProduct(response);
        } else {
            navigate('/');
        }
      }
    } catch (error) {
      // TODO
    }
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  if (product) {
    return (
      <React.Fragment>
        <Breadcrumbs categories={product?.categories || []}/>
        <ProductDetail product={product}/>
      </React.Fragment>
    );
  } else {
    return null;
  }

};
