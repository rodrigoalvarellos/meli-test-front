import * as React from 'react';
import styles from './breadcrumbs.module.scss';

export interface IBreadcrumbsProps {
}

export function Breadcrumbs (props: IBreadcrumbsProps) {
  return (
    <div className={styles.Breadcrumbs}>
        <span className={styles.Breadcrumbs__link}>Electrónica, Audio y Video &gt;</span>
        <span className={styles.Breadcrumbs__link}>iPod &gt;</span>
        <span className={styles.Breadcrumbs__link}>Reproductores &gt;</span>
        <span className={styles.Breadcrumbs__link}>iPod touch &gt;</span>
        <span className={styles.Breadcrumbs__link}>32 GB</span>
 
    </div>
  );
}
