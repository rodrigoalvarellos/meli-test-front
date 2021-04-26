import { FC } from 'react';
import { Link } from '@reach/router';

import styles from './SearchItem.module.scss';
import { Item } from '../../interfaces/searchResult.interface';
import shipping from '../../assets/images/ic_shipping@2x.png';
import noImage from '../../assets/images/no_image.png';
import texts from '../../config/text.config.json';

export interface ISearchItemProps {
  item: Item;
}
/**
 * This component renders an item from the results list.
 * @param item
 */
export const SearchItem: FC<ISearchItemProps> = ({ item }) => (
  <Link className={styles.search_item} to={`/items/${item.id}`}>
    <div className={styles.search_item__image_wrapper}>
      <img
        className={styles.search_item__image}
        src={item.picture ? item.picture : noImage}
        alt={item.title}
      />
    </div>

    <div className={styles.search_item__content_wrapper}>
      <span className={styles.search_item__price_wrapper}>
        <span className={styles.search_item__price}>
          {item.price.currency} {item.price.amount}
          <small className={styles.search_item__price_decimals}>
            {item.price.decimals}
          </small>
        </span>
        {item.free_shipping ? (
          <img
            className={styles.search_item__shipping}
            src={shipping}
            alt={texts.search_item.ml_shipped}
          />
        ) : null}
      </span>

      <div className={styles.search_item__location_wrapper}>
        <span className={styles.search_item__location}>
          {item.address.state}
        </span>
      </div>

      <h2 className={styles.search_item__title}>{item.title}</h2>
    </div>
  </Link>
);
