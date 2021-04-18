import styles from "./list-items-item.module.scss";

// Assets
import shipping from "../../assets/images/ic_shipping@2x.png";
import { FC, HTMLAttributes } from "react";
import { Item } from "../../interfaces/searchResult";

export interface IListItemsItemProps extends HTMLAttributes<HTMLDivElement> {
  item: Item;
}

export const ListItemsItem: FC<IListItemsItemProps> = ({ item, ...props }) => {
  return (
    <div className={styles.ListItemsItem} {...props}>
      <div className={styles.ListItemsItem__image_wrapper}>
        <img
          className={styles.ListItemsItem__image}
          src={item.picture}
          alt={item.title}
        />
      </div>

      <div className={styles.ListItemsItem__content_wrapper}>
        <span className={styles.ListItemsItem__price_wrapper}>
          <span className={styles.ListItemsItem__price}>
            {item.price.currency} {item.price.amount}.{item.price.decimals}
          </span>
          {item.free_shipping ? (
            <img
              className={styles.ListItemsItem__shipping}
              src={shipping}
              alt="Enviado por Mercado Libre"
            />
          ) : null}
        </span>

        <div className={styles.ListItemsItem__location_wrapper}>
          <span className={styles.ListItemsItem__location}>{item.address.state}</span>
        </div>

        <p className={styles.ListItemsItem__title}>
          {item.title}
        </p>
      </div>
    </div>
  );
};
