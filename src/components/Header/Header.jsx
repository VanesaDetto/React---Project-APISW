import React from "react";
import logo from "../../assets/vinilo-logo-star-wars.png";
import "./Header.css";

const Header = ({ setShowCharacters, setShowMovies }) => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li onClick={() => setShowCharacters(true) & setShowMovies(false)}>
            CHARACTER
          </li>
          <li onClick={() => setShowMovies(true) & setShowCharacters(false)}>
            MOVIES
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
