export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>
            Datos proporcionados por{" "}
            <a
              href="https://rickandmortyapi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              The Rick and Morty API
            </a>
          </p>
        </div>

        <div className="footer-section">
          <p className="copyright">
            Rick and Morty © Adult Swim / Cartoon Network
          </p>
          <p className="project-info">
            Proyecto desarrollado como prueba práctica - Uso educativo
          </p>
        </div>

        <div className="footer-section">
          <p className="developer-info">Desarrollado con ⚛️ React - 2025</p>
        </div>
      </div>
    </footer>
  );
}
