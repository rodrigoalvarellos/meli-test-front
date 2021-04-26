import { FC, HTMLAttributes } from 'react';
import styles from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card: FC<ICardProps> = (props) => (
  <div className={styles.card} {...props}>
    {props.children}
  </div>
);
