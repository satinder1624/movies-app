import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "../Movies/styles/styles.module.css";

import axios from "axios";
import { StoreContext } from "../../store";
import NoMovieFound from "../404/NoMovieFound";

export default function Movies() {
  const { searchItem } = useContext(StoreContext);
  const [movies, setMovies] = useState();
  const [skip, setSkip] = useState(true);

  useEffect(() => {
    if (!skip) {
      let isCancelled = true;

      if (searchItem === "") {
        return;
      }

      axios
        .get(`https://www.omdbapi.com/?s=${searchItem}&apikey=a24a6b03`)
        .then((res) => {
          if (isCancelled) {
            setMovies(res.data.Search);
            console.log(res.data.Search);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      return () => {
        isCancelled = false;
      };
    }
  }, [searchItem]);

  //   First fetch
  useEffect(() => {
    let isCancelled = true;

    axios
      .get(`https://www.omdbapi.com/?s=Batman&apikey=a24a6b03`)
      .then((res) => {
        if (isCancelled) {
          setMovies(res.data.Search);
          setSkip(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      isCancelled = false;
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        {/* One movie card */}
        {movies?.map((movie, i) => (
          <MovieCard key={i} data={movie} movieIndex={i} allMovies={movies} />
        ))}
      </div>
      {!movies ? <NoMovieFound /> : null}
    </>
  );
}
