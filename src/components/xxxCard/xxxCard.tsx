import { FC, HTMLAttributes } from 'react';
import styles from './xxxCard.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card: FC<ICardProps> = (props) => (
  <div className={styles.Card} {...props}>
    {props.children}
  </div>
);
