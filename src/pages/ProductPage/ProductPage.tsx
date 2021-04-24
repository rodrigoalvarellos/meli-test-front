import { navigate, RouteComponentProps } from "@reach/router";
import React, { FC, useEffect, useState } from "react";
import { Loading } from "../../components/Loading/Loading";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";
import { getProductoDetail } from "../../services/items.service";
import { ProductDetailItem } from "../../interfaces/product-detail.iterface";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import texts from "../../config/text.config.json";

interface IProductPageProps extends RouteComponentProps {
  itemId?: string;
  setMetaTags: Function;
}

export const ProductPage: FC<IProductPageProps> = ({
  itemId,
  setMetaTags,
  ...props
}) => {
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
          setMetaTags({
            title: `${texts.header_meta_tags.title} - ${data.item.title}`,
            description: `${texts.header_meta_tags.title} - ${data.item.title}`,
            keywords: data.categories.map((cat) => cat.name).join(","),
          });
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
      <>
        <Breadcrumbs categories={product?.categories || []} />
        <ProductDetail product={product} />
      </>
    );
  } else {
    return null;
  }
};
