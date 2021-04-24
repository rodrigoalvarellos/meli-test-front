import { FC } from 'react';
// import styles from './HomePage.module.scss';
import { RouteComponentProps } from '@reach/router';

interface IHomeProps extends RouteComponentProps {}

/**
 * This component represents the blank page when starting the application.
 */
export const HomePage: FC<IHomeProps> = (props) => (
  <>
    {/* <div className={styles.HomePage__card_container}>
             <Card >Hola</Card>

        </div> */}
  </>
);
const a = (b: number) => b + 2;
a('chau');
