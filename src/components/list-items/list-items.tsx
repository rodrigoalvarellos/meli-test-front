import * as React from 'react';
import styles from './list-items.module.scss'; // Import css modules stylesheet as styles

export interface IAppProps {
}

export function ListItems (props: IAppProps) {
  return (
    <div className={styles.ListItems}>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      
    </div>
  );
}
