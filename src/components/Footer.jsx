import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Umzüge & Entrümpelung. Alle Rechte vorbehalten.</p>
      <nav>
        <a href="/impressum">Impressum</a> | <a href="/datenschutz">Datenschutz</a>
      </nav>
    </footer>
  );
};

export default Footer;
