import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src="Rick_and_Morty_logo.svg"
        alt="rickandmortylogo"
      />
      <h1 className="app-subtitle">
        ¡Prueba a buscar un personaje específico para conocer más!
      </h1>
    </div>
  );
}
