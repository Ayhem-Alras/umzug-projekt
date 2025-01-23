import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo immer links */}
        <Link to="/" className="navbar-logo navbar-logo-left">
          Umzüge & Entrümpelung
        </Link>

        {/* Navbar Links */}
        <ul className="navbar-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/entruempelung" className="nav-link">
              Entrümpelung
            </Link>
          </li>
          <li>
            <Link to="/umzug" className="nav-link">
              Umzug
            </Link>
          </li>
          <li>
            {/* Neuer Menüpunkt für Über uns */}
            <Link to="/impressum" className="nav-link">
              Über Uns
            </Link>
          </li>
        </ul>

        {/* Button: Kostenlos beraten */}
        <Link to="/anfrage" className="navbar-btn">
          Jetzt kostenlos beraten
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
