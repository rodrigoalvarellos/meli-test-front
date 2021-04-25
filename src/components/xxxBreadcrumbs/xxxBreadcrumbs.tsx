import { FC, HTMLAttributes } from 'react';
import { Link } from '@reach/router';
import styles from './xxxBreadcrumbs.module.scss';
import { Category } from '../../interfaces/category.interface';
import { ChevronIcon } from '../icons/ChevronRight';

export const DATA_TESTID = 'BREADCRUMB_TESTID';

export interface IBreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {
  categories: Category[];
}

/**
 * This component renders the list of categories and allows searching for these categories
 * @param categories
 */
export const Breadcrumbs: FC<IBreadcrumbsProps> = ({
  categories,
  ...props
}) => (
  <nav className={styles.Breadcrumbs} {...props} data-testid={DATA_TESTID}>
    <ul className={styles.Breadcrumbs__list}>
      {categories.map((cat, idx) => (
        <li key={cat.id} className={styles.Breadcrumbs__list_item}>
          <Link
            to={`/items?category=${cat.id}`}
            className={styles.Breadcrumbs__link}
            aria-label={cat.name}
          >
            {cat.name}
          </Link>
          {idx < categories.length - 1 ? (
            <ChevronIcon fill="#999999" height="16px" />
          ) : null}
        </li>
      ))}
    </ul>
  </nav>
);
