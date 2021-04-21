import React, { FC } from "react";
// import styles from "./home-page.module.scss";
import { RouteComponentProps } from "@reach/router";
// import { Card } from "../../components/card/card";

interface IHomeProps extends RouteComponentProps {}

export const HomePage: FC<IHomeProps> = (props) => {
  return (
    <React.Fragment>
        {/* <div className={styles.HomePage__card_container}>
             <Card >Hola</Card>

        </div> */}
    </React.Fragment>
  );
};
