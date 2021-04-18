import { FC, HTMLAttributes } from "react";
import { Button } from "../button/button";
import styles from "./product-detail.module.scss";

// Assets
import bicicletaImg from "../../assets/images/mountainBike.png";
import { ProductDetailItem } from "../../interfaces/product-detail.iterface";

interface IProductDetail extends HTMLAttributes<HTMLDivElement> {
  product: ProductDetailItem;
}

export const ProductDetail: FC<IProductDetail> = ({ product, ...props }) => {
  return (
    <div className={styles.ProductDetail} {...props}>
      <div className={styles.ProductDetail__content_row}>
        <section className={styles.ProductDetail__image_wrapper}>
          <img
            className={styles.ProductDetail__image}
            src={product.item.picture}
            alt={product.item.title}
          />
        </section>
        <aside className={styles.ProductDetail__detail_content}>
          <div className={styles.ProductDetail__detail_wrapper}>
            <p className={styles.ProductDetail__detail_subtitle}>
              {product.item.condition} - {product.item.sold_quantity}{" "}
              {`vendido${product.item.sold_quantity > 1 ? "s" : null}`}
            </p>
            <h1 className={styles.ProductDetail__detail_title}>
              {product.item.title}
            </h1>
            <h2 className={styles.ProductDetail__detail_price}>$ {product.item.price.amount},<span className={styles.ProductDetail__detail_price_decimals}>{product.item.price.decimals}</span></h2>

            <Button>Comprar</Button>
          </div>
        </aside>
      </div>

      <section className={styles.ProductDetail__description_wrapper}>
        <h2 className={styles.ProductDetail__description_title}>
          {product.item.title}
        </h2>
        <p className={styles.ProductDetail__description_text}>
         {product.item.description}
        </p>
      </section>
    </div>
  );
};
