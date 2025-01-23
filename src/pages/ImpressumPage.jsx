import "./ImpressumPage.css"; // Optional: Styles für diese Seite

const ImpressumPage = () => {
  return (
    <div className="impressum-page">
      <h1>Impressum</h1>
      <p>Informationen gemäß § 5 TMG:</p>
      <p>
        <strong>Umzüge & Entrümpelung</strong>
        <br />
        Musterstraße 12
        <br />
        12345 Musterstadt
      </p>
      <p>
        Telefon: +49 123 456 7890
        <br />
        E-Mail: info@umzuege-entrumpelung.de
      </p>
      <p>Vertreten durch: Max Mustermann</p>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        <br />
        DE123456789
      </p>
      <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Max Mustermann</p>
    </div>
  );
};

export default ImpressumPage;
