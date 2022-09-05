import React, { useContext } from "react";
import { StoreContext } from "../../store";
import styles from "../Header/styles/styles.module.css";

export default function Header() {
  const { searchItem, setSearchItem } = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <div>
        Movies<span>Flix</span>
      </div>
      <div>
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          type="text"
          placeholder="search"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>
    </div>
  );
}
