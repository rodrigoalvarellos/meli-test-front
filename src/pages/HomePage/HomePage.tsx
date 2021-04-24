import React, { FC } from "react";
// import styles from './HomePage.module.scss';
import { RouteComponentProps } from "@reach/router";

interface IHomeProps extends RouteComponentProps {}

/**
 * This component represents the blank page when starting the application.
 */
export const HomePage: FC<IHomeProps> = (props) => {
  return (
    <>
        {/* <div className={styles.HomePage__card_container}>
             <Card >Hola</Card>

        </div> */}
    </>
  );
};
