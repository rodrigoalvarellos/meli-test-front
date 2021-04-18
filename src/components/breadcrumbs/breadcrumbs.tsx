import { FC, HTMLAttributes } from "react";
import { Category } from "../../interfaces/category.interface";
import styles from "./breadcrumbs.module.scss";
// import { ChevronIcon } from '../icons/chevron-right';
import { Link } from '@reach/router';

export interface IBreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {
  categories: Category[];
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = ({
  categories,
  ...props
}) => {
  {
    /* <ChevronIcon /> */
  }
  return (
    <nav className={styles.Breadcrumbs} {...props}>
      <ul className={styles.Breadcrumbs__list}>
        {categories.map(( cat, idx ) => (
          <li key={idx} className={styles.Breadcrumbs__list_item}>
            <Link to={`/items?category=${cat.id}`} className={styles.Breadcrumbs__link}>
              { cat.name }
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
