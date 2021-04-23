import styles from "./SearchBox.module.scss"; // Import css modules stylesheet as styles

// Assets
import logo from "../../assets/images/Logo_ML@2x.png.png";
import { SearchIcon } from "../icons/SearchIcon";
import { FC, HTMLAttributes, useState } from "react";
import { Link, navigate } from "@reach/router";

import texts from '../../config/text.config.json';

const DATA_TESTID = 'SEARCHBOX_TESTID';

export interface ISearchBoxProps extends HTMLAttributes<HTMLElement> {}

export const SearchBox: FC<ISearchBoxProps> = (props) => {

  const sbTexts = texts["search_box"];

  const [value, setValue] = useState<string>("");

  const onSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate(`/items?search=${value}`);
  };

  const clearSearchValue = (): void => {
    setValue('');
  }

  return (
    <header className={styles.SearchBox} {...props} data-testid={DATA_TESTID}>
      <div className={styles.SearchBox__wrapper}>
        <Link to="/" className={styles.SearchBox__image_link} onClick={clearSearchValue}>
          <img
            className={styles.SearchBox__meli_logo}
            src={logo}
            alt={sbTexts["meli_logo_alt"]}
          />
        </Link>

        <form  className={styles.SearchBox__form} onSubmit={onSearch}>
          <input
            className={styles.SearchBox__search_input}
            type="text"
            placeholder={sbTexts["input_placeholder"]}
            aria-label={sbTexts["input_aria_label"]}
            value={value}
            onChange={(event: React.FormEvent<HTMLInputElement>) =>
              setValue(event.currentTarget.value)
            }
          />

          <button
            type="submit"
            className={styles.SearchBox__search_button}
            aria-label={sbTexts["search_btn"]}           
          >
            <SearchIcon aria-hidden="true" />
          </button>
        </form>
      </div>
    </header>
  );
};
