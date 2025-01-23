import styles from "./UmzugPage.module.css";
import movingImage1 from "../images/umzug1.webp";
import movingImage2 from "../images/umzug2.webp";

const UmzugPage = () => {
  return (
    <div className={styles.umzugPage}>
      <h1>Umzug</h1>
      <p>Willkommen auf der Seite für unseren professionellen Umzugsservice.</p>
      <div className={styles.imageGrid}>
        <div className={styles.imageBox}>
          <img src={movingImage1} alt="Umzug 1" />
          <p>Professionelle Umzugsdienste</p>
        </div>
        <div className={styles.imageBox}>
          <img src={movingImage2} alt="Umzug 2" />
          <p>Effiziente Transportlösungen</p>
        </div>
        <div className="about-section">
        <h2>Wie wir arbeiten</h2>
        <p>
          Unser Umzugsservice zeichnet sich durch Professionalität, Präzision und
          Zuverlässigkeit aus. Zu Beginn besprechen wir alle Details Ihres Umzugs,
          einschließlich des Volumens Ihrer Gegenstände, der Entfernung und
          spezifischer Anforderungen. Basierend darauf erstellen wir Ihnen ein
          transparentes Angebot.
        </p>
        <p>
          Unser Team verpackt Ihre Möbel und persönlichen Gegenstände mit großer
          Sorgfalt. Wir verwenden hochwertige Verpackungsmaterialien, um sicherzustellen,
          dass während des Transports keine Schäden entstehen. Besonders
          empfindliche Gegenstände wie Glas oder Elektronik werden speziell gesichert.
        </p>
        <p>
          Am Umzugstag laden unsere erfahrenen Mitarbeiter Ihre Möbel und Kartons
          effizient in unsere modernen Transportfahrzeuge. Am Zielort entladen
          wir alles mit der gleichen Sorgfalt und stellen sicher, dass Ihre Sachen
          unbeschädigt und sicher ankommen. Auf Wunsch helfen wir Ihnen auch beim
          Aufbau von Möbeln und der Einrichtung Ihrer neuen Räume.
        </p>
        <p>
          Egal, ob Sie innerhalb der Stadt oder in ein anderes Land umziehen –
          unser Service ist darauf ausgerichtet, Ihnen den Umzug so stressfrei wie
          möglich zu gestalten. Mit uns haben Sie einen Partner, der Ihre Bedürfnisse
          versteht und alles daran setzt, dass Ihr Umzug reibungslos abläuft.
        </p>
      </div>
      </div>
      <div className={styles.contactSection}>
        <h2>Kontaktieren Sie uns</h2>
        <p>
          Email: <a href="umzug.de.nrw@gmail.com">umzug.de.nrw@gmail.com</a>
        </p>
        <p>
          Telefon: <a href="tel:+491234567891">+49 123 456 7891</a>
        </p>
      </div>
    </div>
  );
};

export default UmzugPage;
