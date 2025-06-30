import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to={"/"}>
        <img
          className="logo"
          src="Rick_and_Morty_logo.svg"
          alt="rickandmortylogo"
        />
      </Link>

      <h1 className="app-subtitle">Lista de personajes</h1>
    </div>
  );
}
