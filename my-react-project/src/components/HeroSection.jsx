import { Link } from "react-router-dom";
import "./HeroSection.css";
import leftImage from "../images/left.webp"; // Import des linken Bildes
import rightImage from "../images/right.webp"; // Import des rechten Bildes

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Left Side */}
      <div className="hero-left">
        <img src={leftImage} alt="Left Side" className="hero-image" />
        <Link to="/entruempelung" className="btn hero-btn">
          Entrümpelung/Haushaltsauflösung
        </Link>
      </div>

      {/* Right Side */}
      <div className="hero-right">
        <img src={rightImage} alt="Right Side" className="hero-image" />
        <Link to="/umzug" className="btn hero-btn">
          Umzug
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
