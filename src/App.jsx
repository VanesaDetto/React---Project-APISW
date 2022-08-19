import { useState } from "react";
import Header from "./components/Header/Header";
import Characters from "./components/Characters/Characters";
import Movies from "./components/Movies/Movies";

const App = () => {
  const [showCharacters, setShowCharacters] = useState(false);
  const [showMovies, setShowMovies] = useState(false);
  return (
    <div className="App">
      <Header
        setShowCharacters={setShowCharacters}
        setShowMovies={setShowMovies}
      />
      {showCharacters ? <Characters /> : null}
      {showMovies ? <Movies /> : null}
    </div>
  );
};

export default App;
