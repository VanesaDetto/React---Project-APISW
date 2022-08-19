import React from "react";
import "./Moviecards.css";

const MovieCards = ({ movieInfo }) => {
  return (
    <figure className="moviecards">
      <h3>{movieInfo.name}</h3>
      <img
        src={movieInfo.poster}
        alt={movieInfo.name}
        referrerpolicy="no-referrer"
      />
      <p>{movieInfo.year}</p>
    </figure>
  );
};

export default MovieCards;
