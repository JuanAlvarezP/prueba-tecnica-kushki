import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters";
import Header from "./components/Header";
import CharacterDetail from "./components/CharacterDetail";
import SearchById from "./components/SearchById";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <SearchById />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
