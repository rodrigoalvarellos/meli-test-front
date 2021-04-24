import React, { FC } from "react";
// import styles from './HomePage.module.scss';
import { RouteComponentProps } from "@reach/router";

interface IHomeProps extends RouteComponentProps {}

export const HomePage: FC<IHomeProps> = (props) => {
  return (
    <>
        {/* <div className={styles.HomePage__card_container}>
             <Card >Hola</Card>

        </div> */}
    </>
  );
};
