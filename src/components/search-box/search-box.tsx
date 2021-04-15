import styles from "./search-box.module.scss"; // Import css modules stylesheet as styles

// Assets
import logo from "../../assets/images/Logo_ML@2x.png.png";
import lupa from "../../assets/images/ic_Search@2x.png";

export interface ISearchBoxProps {}

export function SearchBox(props: ISearchBoxProps) {
  return (
    <nav className={styles.SearchBox}>

      <div className={styles.SearchBox__wrapper}>

        <img  className={styles.SearchBox__meli_logo} src={logo} alt="Mercado Libre" />

        <input
          className={styles.SearchBox__search_input}
          type="text"
          placeholder="Nunca dejes de buscar"
        />

        <button className={styles.SearchBox__search_button}>

          <img
            className={styles.SearchBox__search_icon}
            src={lupa}
            alt="Buscar"
          />

        </button>
      </div>
    </nav>
  );
}
