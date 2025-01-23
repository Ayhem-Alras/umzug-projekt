import "./EntruempelungPage.css";
import clearingImage1 from "../images/Entrumpelung-Lange-Bild-entrumpelung-Raum-1.jpeg";
import clearingImage2 from "../images/Entrumpelung-Lange-Bild-entrumpelung-Raum-2.jpeg";
import clearingImage3 from "../images/Entrumpelung-Lange-Bild-entrumpelung-Raum-3.jpeg";
import clearingImage4 from "../images/Entrumpelung-Lange-Bild-entrumpelung-Raum-4.jpeg";

const EntruempelungPage = () => {
  return (
    <div className="entruempelung-page">
      <h1>Entrümpelung und Haushaltsauflösung</h1>
      <p>Willkommen auf der Seite für unsere Dienstleistungen.</p>
      
      <div className="image-grid">
        <div className="image-box">
          <img src={clearingImage1} alt="Entrümpelung 1" />
          <p>Effiziente Entrümpelung für Wohnungen</p>
        </div>
        <div className="image-box">
          <img src={clearingImage2} alt="Entrümpelung 2" />
          <p>Haushaltsauflösungen mit Entsorgung</p>
        </div>
        <div className="image-box">
          <img src={clearingImage3} alt="Entrümpelung 3" />
          <p>Schnelle Entrümpelung für Häuser</p>
        </div>
        <div className="image-box">
          <img src={clearingImage4} alt="Entrümpelung 4" />
          <p>Professionelle Lösungen für jeden Bedarf</p>
        </div>
      </div>
      <div className="about-section">
        <h2>Wie wir arbeiten</h2>
        <p>
          Unser Entrümpelungsservice ist darauf spezialisiert, Wohnungen, Häuser
          und Büros effizient und umweltbewusst zu leeren. Wir starten mit einer
          kostenlosen Besichtigung vor Ort, um den Umfang und die Anforderungen
          Ihrer Entrümpelung zu verstehen. Danach erstellen wir einen
          detaillierten Plan und ein unverbindliches Angebot.
        </p>
        <p>
          Während der Entrümpelung sortieren wir alle Gegenstände sorgfältig:
          Möbel, Elektrogeräte, Altpapier, Metall, und Kunststoffe werden getrennt
          und fachgerecht entsorgt. Recycelbare Materialien werden direkt zu
          den entsprechenden Recyclinghöfen transportiert, um die Umwelt zu
          schonen.
        </p>
        <p>
          Unser Ziel ist es, die Räume vollständig zu leeren, sei es eine Wohnung,
          ein Haus oder ein Büro. Nach Abschluss der Arbeiten übergeben wir Ihnen
          die Räume besenrein und sauber. Wir garantieren eine schnelle und
          professionelle Abwicklung, damit Sie sich um nichts kümmern müssen.
        </p>
        <p>
          Vertrauen Sie unserem erfahrenen Team, das seit Jahren erfolgreich
          Entrümpelungen durchführt. Egal, ob es sich um eine kleine Wohnung oder
          ein großes Haus handelt, wir erledigen alles zuverlässig und mit großer
          Sorgfalt.
        </p>
      </div>
      <div className="contact-section">
        <h2>Kontaktieren Sie uns</h2>
        <p>
          Email: <a href="umzug.de.nrw@gmail.com">umzug.de.nrw@gmail.com</a>
        </p>
        <p>
          Telefon: <a href="tel:+491234567890">+49 123 456 7890</a>
        </p>
      </div>
    </div>
  );
};

export default EntruempelungPage;
