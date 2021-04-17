import React, { FC } from "react";
import { HTMLAttributes } from "react";
import styles from "./card.module.scss";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card: FC<ICardProps> = (props) => {
  return (
    <div className={styles.Card} {...props}>
      {props.children}
    </div>
  );
};
