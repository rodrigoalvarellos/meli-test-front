import { FC, HTMLAttributes } from "react";
import { ListItemsItem } from '../list-items-item/list-items-item';
import styles from "./list-items.module.scss"; // Import css modules stylesheet as styles

export interface IListItemsProps extends HTMLAttributes<HTMLDivElement> {}

export const ListItems: FC<IListItemsProps> = (props) => {
  return (
    <div className={styles.ListItems} {...props}>
      <ul className={styles.ListItems__list}>
        <li>
          <ListItemsItem />
        </li>
        <li>
          <ListItemsItem />
        </li>
        <li>
          <ListItemsItem />
        </li>
        <li>
          <ListItemsItem />
        </li>
      </ul>
    </div>
  );
};
