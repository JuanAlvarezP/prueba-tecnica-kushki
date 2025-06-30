import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Loader from "./Loader";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(false);
  const [summary, setSummary] = useState("");
  const [loadingSummary, setLoadingSummary] = useState(false);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        setCharacter(res.data);
        setError(false);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setError(true);
        }
      });
  }, [id]);

  const handleGenerateSummary = async () => {
    if (!character) return;

    setLoadingSummary(true);
    setSummary("");

    const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const prompt = `Based on the following JSON data for a character, write a summary of eight lines or less, describing the character in a creative way that speaks to a science fiction fan, especially Rick and Morty. The summary also emphasizes why the character might be interesting to the user, associating them with everyday activities. Avoid phrases like "Here's a summary..."; simply describe the character directly. Include emojis when necessary.":\n\n${JSON.stringify(
        character,
        null,
        2
      )}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setSummary(text);
    } catch (err) {
      console.error("Error al generar resumen:", err);
      setSummary("❌ Ocurrió un error al generar el resumen.");
    }

    setLoadingSummary(false);
  };

  if (error) return <p>❗ Personaje no encontrado. Intenta con otro ID.</p>;
  if (!character) return <p>Cargando...</p>;

  return (
    <div className="character-detail">
      <div className="character-detail-info-container">
        <img
          className="character-detail-img"
          src={character.image}
          alt={character.name}
        />
        <div className="character-detail-info">
          <h3 className="character-detail-name">{character.name}</h3>
          <ul className="text-detail">
            <li>
              <p>Status: {character.status}</p>
            </li>
            <li>
              <p>Species: {character.species}</p>
            </li>
            <li>
              <p>Gender: {character.gender}</p>
            </li>
            <li>
              <p>Origin: {character.origin.name}</p>
            </li>
            <li>
              <p>Location: {character.location.name}</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="extra-info-detail">
        <button
          className="genRes-btn"
          onClick={handleGenerateSummary}
          disabled={loadingSummary}
        >
          🧠 Generar resumen con IA
        </button>

        {loadingSummary && <Loader />}

        {summary && (
          <div className="ia-summary">
            <h3>Resumen generado:</h3>
            <p>{summary}</p>
          </div>
        )}

        <h3>JSON crudo:</h3>
        <pre>{JSON.stringify(character, null, 2)}</pre>
      </div>
    </div>
  );
}
