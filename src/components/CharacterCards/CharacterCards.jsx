import React from "react";
import "./CharacterCards.css";

const CharacterCards = ({ characterInfo }) => {
  return (
    <figure className="charactercards">
      <h3>{characterInfo.name}</h3>
      <img src={characterInfo.image} alt={characterInfo.name} />
      <p>{characterInfo.role}</p>
    </figure>
  );
};

export default CharacterCards;
