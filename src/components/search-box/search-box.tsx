import styles from "./search-box.module.scss"; // Import css modules stylesheet as styles

// Assets
import logo from "../../assets/images/Logo_ML@2x.png.png";
import { SearchIcon } from "../icons/search-icon";
import { FC, HTMLAttributes, useState } from "react";
import { Link, navigate } from "@reach/router";

const DATA_TESTID = 'seachbox_testid';

export interface ISearchBoxProps extends HTMLAttributes<HTMLElement> {}

export const SearchBox: FC<ISearchBoxProps> = (props) => {
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
            alt="Mercado Libre"
          />
        </Link>

        <form  className={styles.SearchBox__form} onSubmit={onSearch}>
          <input
            className={styles.SearchBox__search_input}
            type="text"
            placeholder="Nunca dejes de buscar"
            aria-label="Ingresá lo que quieras encontrar"
            value={value}
            onChange={(event: React.FormEvent<HTMLInputElement>) =>
              setValue(event.currentTarget.value)
            }
          />

          <button
            type="submit"
            className={styles.SearchBox__search_button}
            aria-label="Buscar"            
          >
            <SearchIcon aria-hidden="true" />
          </button>
        </form>
      </div>
    </header>
  );
};
