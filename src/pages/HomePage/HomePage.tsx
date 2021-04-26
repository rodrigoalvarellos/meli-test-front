/* eslint-disable react-hooks/exhaustive-deps */

import { FC, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import texts from '../../config/text.config.json';
// import styles from './HomePage.module.scss';

interface IHomeProps extends RouteComponentProps {
  setMetaTags: Function;
}

/**
 * This component represents the blank page when starting the application.
 */
export const HomePage: FC<IHomeProps> = ({ setMetaTags }) => {
  const metaTexts = texts.header_meta_tags;

  useEffect(() => {
    setMetaTags({
      title: `${metaTexts.title} - ${metaTexts.slogan}`,
      description: metaTexts.description,
      keywords: metaTexts.keys.join(',')
    });
  }, []);

  return (
    <>
      {/* <div className={styles.HomePage__card_container}>
             <Card ></Card>

        </div> */}
    </>
  );
};
