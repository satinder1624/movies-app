import React, { useEffect, useState } from "react";
import styles from "../PopUp/styles/styles.module.css";

export default function PopUp({
  details,
  isOpen,
  setIsOpen,
  currentIndex,
  setIndex,
  callback,
  isVisibleNext,
  isVisiblePrev,
}) {
  const [skip, setSkip] = useState(true);

  const croosHandler = () => {
    setIndex(0);
    setSkip(true);
    setIsOpen(!isOpen);
  };

  const nextHandler = () => {
    setIndex(currentIndex + 1);
    setSkip(false);
  };

  const prevHandler = () => {
    setIndex(currentIndex - 1);
    setSkip(false);
  };

  useEffect(() => {
    if (!skip) callback(currentIndex);
  }, [currentIndex]);

  return (
    <>
      <div
        className={`${styles.modal} ${isOpen ? styles.isVisible : ""}`}
        id="modal1"
        data-animation="slideInOutLeft"
      >
        <div className={styles.modalDialog}>
          <header className={styles.modalHeader}>
            <span>
              {details?.Title} ({details?.Genre})
            </span>
            <button
              className={styles.closeModal}
              aria-label="close modal"
              data-close
              onClick={croosHandler}
            >
              ✕
            </button>
          </header>
          <section className={styles.modalContent}>
            <div>
              {/* content */}
              <span>Rating: {details?.imdbRating}/10</span>
              <span>{details?.Rated}</span>
              <span>Runtime: {details?.Runtime}</span>
            </div>
            <div>
              {/* Poster */}
              <img src={details?.Poster} />
              {details?.BoxOffice && <h4>Box Office: {details?.BoxOffice}</h4>}
            </div>
          </section>
          <header className={styles.modalHeader}>
            {isVisiblePrev ? (
              ""
            ) : (
              <button
                className={styles.closeModal}
                aria-label="close modal"
                data-close
                onClick={() => prevHandler()}
              >
                PREV
              </button>
            )}
            {isVisibleNext ? (
              ""
            ) : (
              <button
                className={styles.closeModal}
                aria-label="close modal"
                data-close
                onClick={() => nextHandler()}
              >
                NEXT
              </button>
            )}
          </header>
        </div>
      </div>
    </>
  );
}
