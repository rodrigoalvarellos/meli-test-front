import { FC, HTMLAttributes } from "react";
import { Button } from "../button/button";
import styles from "./product-detail.module.scss";

// Assets
import bicicletaImg from '../../assets/images/mountainBike.png';

interface IProductDetail extends HTMLAttributes<HTMLDivElement>{}

export const ProductDetail: FC<IProductDetail> = (props) => {
  return (
    <div className={styles.ProductDetail} {...props}>
      <div className={styles.ProductDetail__content_row}>
        <section className={styles.ProductDetail__image_wrapper}>

          <img className={styles.ProductDetail__image} src={bicicletaImg} alt="Bicicleta Mountain Bike"/>

        </section>
        <aside className={styles.ProductDetail__detail_content}>
          <div className={styles.ProductDetail__detail_wrapper}>
            
            <p className={styles.ProductDetail__detail_subtitle}>Nuevo - 234 vendidos</p>
            <h1 className={styles.ProductDetail__detail_title}>Deco Reverse Sombrero Oxford</h1>
            <h2 className={styles.ProductDetail__detail_price}>$ 1.980.00</h2>
     
            <Button>Comprar</Button>  

          </div>
        </aside>
      </div>

      <section className={styles.ProductDetail__description_wrapper}>
        <h2 className={styles.ProductDetail__description_title}>Titulo de la descripción</h2>
        <p className={styles.ProductDetail__description_text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          architecto non impedit? Amet impedit vitae accusantium at laborum.
          Dolorem atque doloremque exercitationem accusantium aspernatur
          consequuntur facere necessitatibus ea rem ut?
        </p>
      </section>
    </div>
  );
}
