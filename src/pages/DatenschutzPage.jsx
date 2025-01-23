import "./DatenschutzPage.css"; // Optional: Styles für diese Seite

const DatenschutzPage = () => {
  return (
    <div className="datenschutz-page">
      <h1>Datenschutzerklärung</h1>
      <p>
        Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer
        Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie
        ausführlich über den Umgang mit Ihren Daten.
      </p>
      <h2>1. Verantwortlicher</h2>
      <p>Umzüge & Entrümpelung, Musterstraße 12, 12345 Musterstadt</p>
      <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
      <p>
        Wir erheben Ihre personenbezogenen Daten, wenn Sie uns diese im Rahmen
        einer Kontaktaufnahme (z. B. per Kontaktformular oder E-Mail) freiwillig
        mitteilen. Weitere Informationen entnehmen Sie unserer vollständigen
        Datenschutzerklärung.
      </p>
      {/* Weitere Abschnitte wie Cookies, Rechte des Nutzers, etc. */}
    </div>
  );
};

export default DatenschutzPage;
