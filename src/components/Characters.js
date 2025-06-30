import React, { useEffect, useState } from "react";
import getCharacters from "../services/rickAndMortyAPI";
import "../styles.css";
import CharactersGrid from "./CharactersGrid";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((result) => {
        setCharacters(result.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <CharactersGrid characters={characters} />
    </div>
  );
}
