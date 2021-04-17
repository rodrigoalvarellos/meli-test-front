import { FC, HTMLAttributes } from "react";
import styles from "./breadcrumbs.module.scss";
// import { ChevronIcon } from '../icons/chevron-right';

export interface IBreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {}

export const Breadcrumbs: FC<IBreadcrumbsProps> = (props) => {
  return (
    <nav className={styles.Breadcrumbs} {...props}>
      <ul className={styles.Breadcrumbs__list}>
        <li className={styles.Breadcrumbs__list_item}>
          <a href="/" className={styles.Breadcrumbs__link}>Deportes</a>
          {/* <ChevronIcon /> */}
        </li>
        <li className={styles.Breadcrumbs__list_item}>
          <a href="/" className={styles.Breadcrumbs__link}>Bicicletas</a>
        </li>
        <li className={styles.Breadcrumbs__list_item}>
          <a href="/" className={styles.Breadcrumbs__link}>Mountain-Bike</a>
        </li>
        <li className={styles.Breadcrumbs__list_item}>
          <a href="/" className={styles.Breadcrumbs__link}>Enrique</a>
        </li>
        <li className={styles.Breadcrumbs__list_item}>
          <a href="/" className={styles.Breadcrumbs__link}>R29</a>
        </li>
      </ul>
      
    </nav>
  );
};
