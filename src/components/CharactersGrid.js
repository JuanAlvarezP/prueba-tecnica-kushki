import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

export default function CharactersGrid({ characters }) {
  const navigate = useNavigate();
  return (
    <div className="characters-grid">
      {characters.map((char) => (
        <div
          key={char.id}
          className="character-card"
          onClick={() => navigate(`/character/${char.id}`)}
          style={{ cursor: "pointer" }}
        >
          <img src={char.image} alt={char.name} id="char-img" />
          <h2>{char.name}</h2>
        </div>
      ))}
    </div>
  );
}
