import React from "react";
import styles from "../404/styles/styles.module.css";

export default function NoMovieFound() {
  return (
    <div className={styles.container}>
      <i className="fa-solid fa-video"></i>
      <h3>No Movie Found, Try differnet search</h3>
    </div>
  );
}
