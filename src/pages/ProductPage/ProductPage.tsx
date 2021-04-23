import { navigate, RouteComponentProps } from "@reach/router";
import React, { FC, useEffect, useState } from "react";
import { Loading } from "../../components/Loading/Loading";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";
import { getProductoDetail } from "../../services/items.service";
import { ProductDetailItem } from "../../interfaces/product-detail.iterface";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

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

        if (response && response.status === 200) {
          const data: ProductDetailItem = await response.json();
          setProduct(data);
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      navigate("/");
    }
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  if (product) {
    return (
      <React.Fragment>
        <Breadcrumbs categories={product?.categories || []} />
        <ProductDetail product={product} />
      </React.Fragment>
    );
  } else {
    return null;
  }
};
