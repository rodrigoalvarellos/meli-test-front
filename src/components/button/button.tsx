import { FC, HtmlHTMLAttributes } from "react";
import styles from "./button.module.scss";

interface IButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
 
}

export const Button: FC<IButtonProps> = (props) => {
  return <button className={styles.Button} {...props}>{props.children}</button>;
};
