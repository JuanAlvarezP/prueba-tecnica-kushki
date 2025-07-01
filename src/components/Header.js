import React from "react";
import "../styles.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isDetailView = location.pathname.startsWith("/character/");
  return (
    <div className="header">
      <Link to={"/"}>
        <img
          className="logo"
          src="/Rick_and_Morty_logo.svg"
          alt="rickandmortylogo"
        />
      </Link>

      {!isDetailView && <h1 className="app-subtitle">Lista de personajes</h1>}
    </div>
  );
}
