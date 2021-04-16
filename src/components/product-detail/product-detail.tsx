import { FC, HTMLAttributes } from "react";
import styles from "./product-detail.module.scss";

interface IProductDetail extends HTMLAttributes<HTMLDivElement>{}

export const ProductDetail: FC<IProductDetail> = (props) => {
  return (
    <div className={styles.ProductDetail} {...props}>
      <div className={styles.ProductDetail__content_row}>
        <div className={styles.ProductDetail__image}>Imagen</div>
        <div className={styles.ProductDetail__detail_content}>
          <div className={styles.ProductDetail__detail_wrapper}>
            
            <p>Nuevo - 234 vendidos</p>
            <h1>Deco Reverse Sombrero Oxford</h1>
            <h2>1.980.00</h2>
            <button>Comprar</button>    

          </div>
        </div>
      </div>

      <div className={styles.ProductDetail__description_wrapper}>
        <h2 className={styles.ProductDetail__description_title}>Titulo de la descripción</h2>
        <p className={styles.ProductDetail__description_text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          architecto non impedit? Amet impedit vitae accusantium at laborum.
          Dolorem atque doloremque exercitationem accusantium aspernatur
          consequuntur facere necessitatibus ea rem ut?
        </p>
      </div>
    </div>
  );
}
