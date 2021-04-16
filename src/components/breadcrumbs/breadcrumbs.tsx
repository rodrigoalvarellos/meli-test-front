import { FC, HTMLAttributes } from 'react';
import styles from './breadcrumbs.module.scss';

export interface IBreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {}

export const Breadcrumbs:FC<IBreadcrumbsProps> = (props) => {
  return (
    <div className={styles.Breadcrumbs} {...props}>
        <span className={styles.Breadcrumbs__link}>Electrónica, Audio y Video &gt;</span>
        <span className={styles.Breadcrumbs__link}>iPod &gt;</span>
        <span className={styles.Breadcrumbs__link}>Reproductores &gt;</span>
        <span className={styles.Breadcrumbs__link}>iPod touch &gt;</span>
        <span className={styles.Breadcrumbs__link}>32 GB</span>
 
    </div>
  );
}
