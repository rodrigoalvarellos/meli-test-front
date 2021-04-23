import styles from "./ProductDetail.module.scss";
import { FC, HTMLAttributes } from "react";
import { Button } from "../Button/Button";
import texts from "../../config/text.config.json";

import { ProductDetailItem } from "../../interfaces/product-detail.iterface";
import { setStatusText } from "../../helpers/helpers";

// Assets
import shippingImg from "../../assets/images/ic_shipping@2x.png";
import noImage from "../../assets/images/no_image.png";

const DATA_TESTID = 'PRODUCT_DETAIL_TESTID';

interface IProductDetail extends HTMLAttributes<HTMLDivElement> {
  product: ProductDetailItem;
}

export const ProductDetail: FC<IProductDetail> = ({ product, ...props }) => {
  const pdTexts = texts["product_detail"];

  const onBuy = () => {
    window.open(product.item.permalink, "_blank");
  };

  return (
    <div className={styles.ProductDetail} {...props} data-testid={DATA_TESTID}>
      <div className={styles.ProductDetail__content_row}>
        <section className={styles.ProductDetail__image_wrapper}>
          <img
            className={styles.ProductDetail__image}
            src={product.item.picture ? product.item.picture : noImage}
            alt={product.item.title}
          />
        </section>
        <aside className={styles.ProductDetail__detail_content}>
          <div className={styles.ProductDetail__detail_wrapper}>
            <p className={styles.ProductDetail__detail_subtitle}>
              {`${setStatusText(product.item.condition)} - ${
                product.item.sold_quantity
              } ${
                product.item.sold_quantity === 1 ? pdTexts.sold : pdTexts.solds
              }`}
            </p>
            <h1 className={styles.ProductDetail__detail_title}>
              {product.item.title}
            </h1>
            <h2 className={styles.ProductDetail__detail_price}>
              {product.item.price.currency} {product.item.price.amount}
              <span className={styles.ProductDetail__detail_price_decimals}>
                {product.item.price.decimals}
              </span>
              {product.item.free_shipping ? (
                <img
                  className={styles.ProductDetail__detail_shipping}
                  src={shippingImg}
                  alt={pdTexts["shipping_alt"]}
                />
              ) : null}
            </h2>

            <Button
              onClick={onBuy}
              aria-label={pdTexts["buy_btn"]}
            >
              {pdTexts["buy_btn"]}
            </Button>
          </div>
        </aside>
      </div>

      <section className={styles.ProductDetail__description_wrapper}>
        <h2 className={styles.ProductDetail__description_title}>
          {pdTexts["product_description_title"]}
        </h2>
        <p className={styles.ProductDetail__description_text}>
          {product.item.description}
        </p>
      </section>
    </div>
  );
};
