import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCards from "../MovieCards/Moviecards";
import "./Movies.css";

const Movies = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovies = async () => {
    const rawData = await axios.get(
      "https://starwars-server.vercel.app/movies"
    );
    setMovieList(rawData.data.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section>
      <div className="titutlo">
        <h2>MOVIES</h2>
      </div>
      <div className="containercard">
        {movieList.length > 0 ? (
          movieList.map((movie) => (
            <MovieCards movieInfo={movie} key={movie._id} />
          ))
        ) : (
          <p>Cargando movies...</p>
        )}
      </div>
    </section>
  );
};

export default Movies;
