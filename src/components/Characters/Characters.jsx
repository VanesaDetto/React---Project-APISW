import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCards from "../CharacterCards/CharacterCards";
import "./Characters.css";

const Characters = () => {
  const [characterList, setCharacterList] = useState([]);

  const getCharacters = async () => {
    const rawData = await axios.get(
      "https://starwars-server.vercel.app/characters"
    );
    setCharacterList(rawData.data.data.characters);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <section>
      <div className="titutlo">
        <h2>CHARACTERS</h2>
      </div>
      <div className="containercard">
        {characterList.length > 0 ? (
          characterList.map((character) => (
            <CharacterCards characterInfo={character} key={character._id} />
          ))
        ) : (
          <p>Cargando personajes...</p>
        )}
      </div>
    </section>
  );
};

export default Characters;
