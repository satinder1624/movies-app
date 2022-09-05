import React, { useState } from "react";
import styles from "../MovieCard/styles/styles.module.css";

import axios from "axios";
import PopUp from "../PopUp/PopUp";

export default function MovieCard({
  data: { Title, Year, Type, Poster, imdbID },
  movieIndex,
  allMovies,
}) {
  const [movieDetails, setMovieDetails] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(movieIndex);
  const [isVisibleNext, setIsVisibleNext] = useState();
  const [isVisiblePrev, setIsVisiblePrev] = useState(false);

  const getMoreDetails = (index) => {
    // Next Button Display or Not
    if (index >= allMovies.length - 1) {
      setIsVisibleNext(true);
    } else {
      setIsVisibleNext(false);
    }

    // Prev Button Display or Not
    if (index === 0) {
      setIsVisiblePrev(true);
    } else {
      setIsVisiblePrev(false);
    }

    if (index >= 0 && index < allMovies.length) {
      console.log(index);
      console.log(allMovies[index].imdbID);
      let isCancelled = true;
      axios
        .get(
          `https://www.omdbapi.com/?i=${allMovies[index].imdbID}&apikey=a24a6b03`
        )
        .then((res) => {
          if (isCancelled) {
            setMovieDetails(res.data);
            setIsOpen(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      return () => {
        isCancelled = false;
      };
    }
  };

  return (
    <>
      <div
        className={styles.movieCard}
        onClick={() => getMoreDetails(movieIndex)}
      >
        <img src={Poster} width={300} height={300} alt={"Poster Missing"} />
        <span className={styles.movieName}>{Title}</span>
        <div className={styles.moviesDetails}>
          <span>Year: {Year}</span>
          <span>Type: {Type}</span>
        </div>
      </div>
      <PopUp
        details={movieDetails}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentIndex={index}
        setIndex={setIndex}
        callback={getMoreDetails}
        isVisibleNext={isVisibleNext}
        isVisiblePrev={isVisiblePrev}
      />
    </>
  );
}
