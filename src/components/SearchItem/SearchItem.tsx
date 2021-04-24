import styles from "./SearchItem.module.scss";

import { FC, HTMLAttributes } from "react";
import { Item } from "../../interfaces/searchResult.interface";
import { navigate } from "@reach/router";

// Assets
import shipping from "../../assets/images/ic_shipping@2x.png";
import noImage from "../../assets/images/no_image.png";
export interface ISearchItemProps extends HTMLAttributes<HTMLDivElement> {
  item: Item;
}
/**
 * This component renders an item from the results list.
 * @param item 
 */
export const SearchItem: FC<ISearchItemProps> = ({ item, ...props }) => {
  const onItemClick: any = () => {
    navigate(`/items/${item.id}`);
  };

  return (
    <div className={styles.SearchItem} {...props} onClick={onItemClick}>
      <div className={styles.SearchItem__image_wrapper}>
        <img
          className={styles.SearchItem__image}
          src={item.picture ? item.picture : noImage}
          alt={item.title}
        />
      </div>

      <div className={styles.SearchItem__content_wrapper}>
        <span className={styles.SearchItem__price_wrapper}>
          <span className={styles.SearchItem__price}>
            {/* {item.price.currency} */}$ {item.price.amount}
            <small className={styles.SearchItem__price_decimals}>
              {item.price.decimals}
            </small>
          </span>
          {item.free_shipping ? (
            <img
              className={styles.SearchItem__shipping}
              src={shipping}
              alt="Enviado por Mercado Libre"
            />
          ) : null}
        </span>

        <div className={styles.SearchItem__location_wrapper}>
          <span className={styles.SearchItem__location}>
            {item.address.state}
          </span>
        </div>

        <h2 className={styles.SearchItem__title}>{item.title}</h2>
      </div>
    </div>
  );
};
