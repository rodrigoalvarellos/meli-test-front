import { FC, HTMLAttributes } from 'react';

import { Button } from '../Button/Button';
import { ProductDetailItem } from '../../interfaces/product-detail.iterface';
import { setStatusText } from '../../helpers/helpers';

import styles from './ProductDetail.module.scss';
import texts from '../../config/text.config.json';
import shippingImg from '../../assets/images/ic_shipping@2x.png';
import noImage from '../../assets/images/no_image.png';

export const DATA_TESTID = 'PRODUCT_DETAIL_TESTID';

interface IProductDetail extends HTMLAttributes<HTMLDivElement> {
  product: ProductDetailItem;
}

/**
 * This component renders the detail of a product. Includes the title, price, condition, description, image, and more
 */
export const ProductDetail: FC<IProductDetail> = ({ product, ...props }) => {
  const pdTexts = texts.product_detail;

  const onBuy = () => {
    window.open(product.item.permalink, '_blank');
  };

  return (
    <div className={styles.product_detail} {...props} data-testid={DATA_TESTID}>
      <div className={styles.product_detail__content_row}>
        <section className={styles.product_detail__image_wrapper}>
          <img
            className={styles.product_detail__image}
            src={product.item.picture ? product.item.picture : noImage}
            alt={product.item.title}
          />
        </section>
        <aside className={styles.product_detail__detail_content}>
          <div className={styles.product_detail__detail_wrapper}>
            <p className={styles.product_detail__detail_subtitle}>
              {`${setStatusText(product.item.condition)} - ${
                product.item.sold_quantity
              } ${
                product.item.sold_quantity === 1 ? pdTexts.sold : pdTexts.solds
              }`}
            </p>
            <h1 className={styles.product_detail__detail_title}>
              {product.item.title}
            </h1>
            <h2 className={styles.product_detail__detail_price}>
              {product.item.price.currency} {product.item.price.amount}
              <span className={styles.product_detail__detail_price_decimals}>
                {product.item.price.decimals}
              </span>
              {product.item.free_shipping ? (
                <img
                  className={styles.product_detail__detail_shipping}
                  src={shippingImg}
                  alt={pdTexts.shipping_alt}
                />
              ) : null}
            </h2>

            <Button onClick={onBuy} aria-label={pdTexts.buy_btn}>
              {pdTexts.buy_btn}
            </Button>
          </div>
        </aside>
      </div>

      <section className={styles.product_detail__description_wrapper}>
        <h2 className={styles.product_detail__description_title}>
          {pdTexts.product_description_title}
        </h2>
        <p className={styles.product_detail__description_text}>
          {product.item.description}
        </p>
      </section>
    </div>
  );
};
