import * as React from 'react';
import ListItemsItem from '../list-items-item/list-items-item';
import styles from './list-items.module.scss'; // Import css modules stylesheet as styles

export interface IAppProps {
}

export function ListItems (props: IAppProps) {
  return (
    <div className={styles.ListItems}>

      <ul className={styles.ListItems__list}>
        <li><ListItemsItem/></li>
        <li><ListItemsItem/></li>
        <li><ListItemsItem/></li>
        <li><ListItemsItem/></li>
      </ul>
      
    </div>
  );
}
