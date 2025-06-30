import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

const getCharacters = () => api.get("/character/?page=1");

export default getCharacters;
