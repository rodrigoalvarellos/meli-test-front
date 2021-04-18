import { RouteComponentProps } from "@reach/router";
import { FC, HTMLAttributes } from "react";
import { ListItemsItem } from "../list-items-item/list-items-item";
import styles from "./list-items.module.scss"; // Import css modules stylesheet as styles
import { Item } from "../../interfaces/searchResult.interface";

export interface IListItemsProps
  extends HTMLAttributes<HTMLDivElement>,
    RouteComponentProps {
  items?: Item[];
}

export const ListItems: FC<IListItemsProps> = ({ items, ...props }) => {
  return (
    <div className={styles.ListItems} {...props}>
      <ul className={styles.ListItems__list}>
        {items?.map((item) => (
          <li key={item.id}>
            <ListItemsItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
