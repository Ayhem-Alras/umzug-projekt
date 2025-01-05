import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Unsere Dienstleistungen</h2>
      <div className="services-container">
        <div className="service-card">
          <h3>Umzüge</h3>
          <p>Professionelle Umzugsdienste für Privat- und Geschäftskunden.</p>
        </div>
        <div className="service-card">
          <h3>Entrümpelung</h3>
          <p>Effiziente Entrümpelung für Wohnungen, Häuser und Büros.</p>
        </div>
        <div className="service-card">
          <h3>Haushaltsauflösung</h3>
          <p>Komplette Haushaltsauflösungen mit Entsorgung.</p>
        </div>
        <div className="service-card">
          <h3>Entsorgen</h3>
          <p>Umweltfreundliche und fachgerechte Entsorgung von Abfällen.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
