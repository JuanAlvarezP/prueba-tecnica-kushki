import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchById() {
  const [inputId, setInputId] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (inputId.trim() !== "") {
      navigate(`/character/${inputId}`);
      setInputId("");
    }
  };

  return (
    <div className="search-container">
      <input
        className="id-input"
        type="number"
        placeholder="Buscar por ID..."
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
      />
      <button className="consultar-btn" onClick={handleSearch}>
        Consultar personaje
      </button>
    </div>
  );
}
