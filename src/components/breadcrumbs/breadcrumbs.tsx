import { FC, HTMLAttributes } from "react";
import { Category } from "../../interfaces/category.interface";
import styles from "./Breadcrumbs.module.scss";
import { ChevronIcon } from "../icons/ChevronRight";
import { Link } from "@reach/router";

export const DATA_TESTID = 'BREADCRUMB_TESTID';


export interface IBreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {
  categories: Category[];
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = ({
  categories,
  ...props
}) => {
  return (
    <nav className={styles.Breadcrumbs} {...props} data-testid={DATA_TESTID}>
      <ul className={styles.Breadcrumbs__list}>
        {categories.map((cat, idx) => (
          <li key={idx} className={styles.Breadcrumbs__list_item}>
            <Link
              to={`/items?category=${cat.id}`}
              className={styles.Breadcrumbs__link}
              aria-label={cat.name}
            >
              {cat.name}
            </Link>
            {idx < categories.length - 1 ? (
              <ChevronIcon fill="#999999" height="16px"/>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};
