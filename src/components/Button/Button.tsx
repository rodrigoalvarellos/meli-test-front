import { FC, HtmlHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface IButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<IButtonProps> = (props) => (
  <button type="button" className={styles.button} {...props}>
    {props.children}
  </button>
);
