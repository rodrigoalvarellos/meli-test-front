import { FC, HTMLAttributes, useState } from 'react';
import { Link, navigate } from '@reach/router';

import { SearchIcon } from '../icons/SearchIcon';

import styles from './SearchBox.module.scss';
import logo from '../../assets/images/Logo_ML@2x.png.png';
import texts from '../../config/text.config.json';

export const DATA_TESTID = 'SEARCHBOX_TESTID';

export interface ISearchBoxProps extends HTMLAttributes<HTMLElement> {}

/**
 * This component is in charge of rendering the products search bar,
 *  capturing the query and navigating to the results page. *
 */
export const SearchBox: FC<ISearchBoxProps> = (props) => {
  const sbTexts = texts.search_box;

  const [value, setValue] = useState<string>('');

  const onSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate(`/items?search=${value}`);
  };

  const clearSearchValue = (): void => {
    setValue('');
  };

  return (
    <header className={styles.search_box} {...props} data-testid={DATA_TESTID}>
      <div className={styles.search_box__wrapper}>
        <Link
          to="/"
          className={styles.search_box__image_link}
          onClick={clearSearchValue}
        >
          <img
            className={styles.search_box__meli_logo}
            src={logo}
            alt={sbTexts.meli_logo_alt}
          />
        </Link>

        <form className={styles.search_box__form} onSubmit={onSearch}>
          <input
            className={styles.search_box__search_input}
            type="text"
            placeholder={sbTexts.input_placeholder}
            aria-label={sbTexts.input_aria_label}
            value={value}
            onChange={(event: React.FormEvent<HTMLInputElement>) =>
              setValue(event.currentTarget.value)
            }
          />

          <button
            type="submit"
            className={styles.search_box__search_button}
            aria-label={sbTexts.search_btn}
          >
            <SearchIcon aria-hidden="true" />
          </button>
        </form>
      </div>
    </header>
  );
};
