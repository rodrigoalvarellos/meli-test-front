import styles from "./search-box.module.scss"; // Import css modules stylesheet as styles

// Assets
import logo from "../../assets/images/Logo_ML@2x.png.png";
import { SearchIcon } from "../icons/search-icon";
import { FC, HTMLAttributes } from "react";

export interface ISearchBoxProps extends HTMLAttributes<HTMLElement>  {}

export const SearchBox:FC<ISearchBoxProps> = (props) => {
  return (
    <header className={styles.SearchBox} {...props}>
      <div className={styles.SearchBox__wrapper}>
        <img
          className={styles.SearchBox__meli_logo}
          src={logo}
          alt="Mercado Libre"
        />

        <input
          className={styles.SearchBox__search_input}
          type="text"
          placeholder="Nunca dejes de buscar"
          aria-label="Ingresá lo que quieras encontrar"
        />

        <button className={styles.SearchBox__search_button} aria-label="Buscar">
          <SearchIcon  aria-hidden="true"/>
        </button>
      </div>
    </header>
  );
}
