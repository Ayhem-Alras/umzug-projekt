import { Link } from "react-router-dom";
import "./HeroSection.css";
import leftImage from "../images/left.webp"; // Import des linken Bildes
import rightImage from "../images/right.webp"; // Import des rechten Bildes
import googleLogo from "../images/icons8-google-logo-48.png"; // Import des Google-Logos

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Header Section with Images */}
      <div className="hero-header">
        <div className="hero-image-container">
          <img src={leftImage} alt="Entrümpelung" />
          <Link to="/entruempelung" className="hero-btn">Entrümpelung</Link>
        </div>
        <div className="hero-image-container">
          <img src={rightImage} alt="Umzug" />
          <Link to="/umzug" className="hero-btn">Umzug</Link>
        </div>
      </div>

            {/* DUE Section */}
            <div className="hero-due">
        <h2>Umzugsunternehmen: Umzugs- & Entrümpelungsservice (DUE)</h2>
        <p>✅ Schnell, effizient, professionell</p>
        <p>Ihr Nr. 1 Partner für Entrümpelung und Umzug in Nordrhein-Westfalen.</p>
        <p>
          Der Deutsche Umzugs- & Entrümpelungsservice (DUE) bietet folgende
          Leistungen:
        </p>
        <ul>
          <li>🌞 Full-Service Angebote</li>
          <li>⭐ Garantierte Festpreise</li>
          <li>🧑‍🔧 Erfahrene, feste Umzugshelfer</li>
        </ul>
        <p>
          Für eine unkomplizierte Angebotserstellung bieten wir Videobesichtigungen an 🗓️. 
          Wenn Sie von außerhalb nach Nordrhein-Westfalen ziehen und eine persönliche Besichtigung 
          vor Ort aufgrund der Distanz nicht möglich ist, können Sie jetzt einen unverbindlichen Termin 
          für eine Videobesichtigung buchen. So können wir Anfragen deutschlandweit direkt aus unserem Büro 
          entgegennehmen.
        </p>
        <p>
          Für Fotos oder Videos der Einrichtung können Sie uns gerne per E-Mail oder WhatsApp kontaktieren.
        </p>

        <p className="hero-due-contact">
  <strong>Kontakt:</strong>
  <br />
  📞 <a href="tel:+4915751054032">+4915751054032</a>
  <br />
  📧 <a href="mailto:[E-Mail-Adresse]">[E-Mail-Adresse]</a>
</p>

      </div>

      {/* Center Content */}
      <div className="hero-center">
        <h2>Ihr professionelles Umzugsunternehmen aus Essen!</h2>
        <ul>
          <li>✅ Zuverlässigkeit bei allen Aufträgen</li>
          <li>✅ Über 15 Jahre Erfahrung</li>
          <li>✅ Eingespielte feste Umzugshelfer</li>
          <li>✅ Vollausgestattet, um jede Herausforderung zu meistern</li>
        </ul>
        <p>
          Was Sie erwarten können:
          <br />
          Einen professionellen, kundenorientierten Service. Wir als eingesessenes
          Umzugsunternehmen haben bereits hunderte zufriedene Kunden mit
          unserem Service überzeugt.
        </p>
        <p>
          <strong>Wie erhalte ich ein Angebot?</strong>
          <br />
          Kontaktieren Sie uns per WhatsApp, E-Mail, Anruf oder über unsere
          Formulare. Wir melden uns kurzfristig, um Ihre individuelle Situation
          zu besprechen und umgehend ein faires Festpreisangebot zu erstellen.
        </p>
      </div>

      {/* Full-Service Section */}
      <div className="hero-full-service">
        <h2>Ihr Full-Service Umzugsunternehmen aus Nordrhein-Westfalen. 🌞</h2>
        <p>
          Wir möchten unseren Kunden den maximalen Komfort bieten und helfen neben dem Umzug
          auch beim Renovieren der alten/neuen Wohnung und bei End- oder Grundreinigungen,
          die im Zuge des Umzuges anfallen, ebenso wie wir anfallenden Sperrmüll entsorgen können.
        </p>
        <p>
          Umso mehr Services aus einer Hand gebucht werden, umso günstiger wird es in der Regel.
        </p>
        <p>
          Mit Deutscher Umzugs- & Entrümpelungsservice an Ihrer Seite können Sie sich auf ein
          gemachtes Nest freuen.
        </p>
        <p>
          Egal ob Privatumzug, Betriebsumzug, Seniorenumzug – Unser Umzugsunternehmen Nordrhein-Westfalen
          hat einen hohen Qualitätsanspruch. Unser Service ist einzigartig und Ihr Umzug für
          uns kein Problem.
        </p>
        <h3>Unser Full-Service Umzug beinhaltet:</h3>
        <ul>
          <li>✅ Haftung für Schäden</li>
          <li>✅ Umzugtransport</li>
          <li>✅ Möbeleinlagerung</li>
          <li>✅ Packservice Kartons</li>
          <li>✅ Möbelmontage</li>
          <li>✅ Küchenmontage</li>
          <li>✅ Entsorgungen</li>
          <li>✅ Malerarbeiten</li>
          <li>✅ Bodenlegen</li>
          <li>✅ Grund- / Endreinigung</li>
        </ul>
      </div>

      <div className="hero-additional-text">
        <h3>Wohnungsauflösung & Umzug aus einer Hand</h3>
        <p>
          <Link to="/entruempelung">Wohnungsauflösungen</Link> und{" "}
          <Link to="/umzug">Umzüge</Link> gehen oft mit Entrümpelungen oder ganzen
          Wohnungsauflösungen einher. Die Gründe dafür sind vielfältig. Manchmal
          ist der Keller über die Jahre mit unnützem Kram zugestellt worden.
          Manchmal möchte man aber auch umziehen, ohne das alte Inventar mitzunehmen.
          Entweder weil man sich einen neuen Stil wünscht oder der neue Wohnort in
          großer Entfernung liegt und man es für besser empfindet, neu anzufangen.
        </p>
        <p>
          Wir als Umzugsunternehmen Nordrhein-Westfalen bieten Ihnen hier den
          perfekten Service, angepasst an Ihre Bedürfnisse, um Ihren Umzug
          reibungslos und aus einer Hand abzuwickeln. Was auch immer Sie planen,
          sprechen Sie uns an und wir finden eine passende Lösung!
        </p>
        <h3>Umzug mit Jobcenter oder anderen staatlichen Zahlungsträgern finanzieren lassen</h3>
        <p>
          Der Deutsche Umzugs- & Entrümpelungsservice ist auch in dem Fall für
          Sie da, wenn Sie die Kosten für Ihr Umzugsunternehmen Nordrhein-Westfalen
          extern übernehmen lassen möchten. Für uns ist es kein Problem, wenn Sie
          unsere Umzugsrechnung über das Jobcenter, die Pflegekasse oder sonstige
          Zahlungsträger finanzieren lassen wollen. Wir sind mit dem Prozess der
          vorzeitigen Angebotseinreichung sowie dem nachträglichen Einreichen der
          Rechnung vertraut. Rufen Sie uns jetzt an und wir beraten Sie gerne und
          begleiten Sie durch den gesamten Prozess, von der Umzugsplanung über die
          Zahlungsfreigabe bis zur Abwicklung des Umzugs.
        </p>
        <h3>Umzugsunternehmen Nordrhein-Westfalen - Umzug ins Ausland</h3>
        <p>
          Sie sind auf der Suche nach einem Umzugsunternehmen, das Ihnen hilft, Ihre
          Einrichtung in ein anderes Land zu transportieren – geschützt & versichert?
          Unsere Umzugsfirma kennt die Herausforderungen eines Auslandsumzuges und ist
          daher gut vorbereitet auf mögliche Hindernisse. Ein Umzug ins Ausland erfordert
          oft besondere bürokratische Maßnahmen – jedes Land hat unterschiedliche
          Einreisebeschränkungen, auf die wir eingehen, um einen reibungslosen Ablauf
          zu gewährleisten.
        </p>
      </div>

      {/* Google Review Box */}
      <div className="hero-google-review">
        <div className="review-container">
          <div className="review-header">
            <img
              src={googleLogo} // Verwenden Sie den lokalen Logo-Pfad
              alt="Google Logo"
              className="google-logo"
            />
            <div>
              <h3 className="review-title">Umzüge & Entrümpelung</h3>
              <p className="review-rating">⭐️⭐️⭐️⭐️⭐️ <span>(4.8 von 5 Sternen)</span></p>
            </div>
          </div>
          <p className="review-text">
            &quot;Hervorragender Service! Die Mitarbeiter waren pünktlich, freundlich und
            äußerst professionell. Absolut empfehlenswert!&quot;
          </p>
         
        </div>
    
      </div>

        {/* Additional Cities Section */}
        <div className="hero-cities">
        <h2>Hier ist die erweiterte Liste mit zusätzlichen Städten in Nordrhein-Westfalen:</h2>
        <p>In diesen Städten können Sie uns finden:</p>
        <p>
          Dieser Bereich der Website wird ständig erweitert. Dank unseres Netzwerks aus internen und externen Partnern können wir Ihnen in diesen Städten anfahrtskostenfrei unseren reibungslosen Service anbieten:
        </p>
        <div className="city-grid">
          <ul>
            <li>• Umzugsunternehmen Dortmund</li>
            <li>• Umzugsunternehmen Bochum</li>
            <li>• Umzugsunternehmen Essen</li>
            <li>• Umzugsunternehmen Herne</li>
            <li>• Umzugsunternehmen Lünen</li>
            <li>• Umzugsunternehmen Düsseldorf</li>
            <li>• Umzugsunternehmen Bottrop</li>
            <li>• Umzugsunternehmen Köln</li>
            <li>• Umzugsunternehmen Mülheim</li>
            <li>• Umzugsunternehmen Oberhausen</li>
            <li>• Umzugsunternehmen Wuppertal</li>
          </ul>
          <ul>
            <li>• Umzugsunternehmen Gelsenkirchen</li>
            <li>• Umzugsunternehmen Krefeld</li>
            <li>• Umzugsunternehmen Leverkusen</li>
            <li>• Umzugsunternehmen Solingen</li>
            <li>• Umzugsunternehmen Remscheid</li>
            <li>• Umzugsunternehmen Hagen</li>
            <li>• Umzugsunternehmen Hamm</li>
            <li>• Umzugsunternehmen Siegen</li>
            <li>• Umzugsunternehmen Moers</li>
            <li>• Umzugsunternehmen Marl</li>
            <li>• Umzugsunternehmen Bergisch Gladbach</li>
          </ul>
        </div>
        <p>
          Unser Service wächst stetig, um Ihnen in ganz Nordrhein-Westfalen zur Seite zu stehen.
        </p>
        
      </div>
    </section>
  );
};

export default HeroSection;
