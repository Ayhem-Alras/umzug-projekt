import { useState } from "react";
import axios from "axios";
import "./ConsultationPage.css";

const ConsultationPage = () => {
  // State für Formulardaten
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // Statusnachricht für Benutzer

  // Funktion zum Aktualisieren des Formulars
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Funktion zum Absenden des Formulars
  const handleSubmit = async (e) => {
    e.preventDefault(); // Verhindert Seiten-Neuladen
    setStatus("Senden..."); // Setzt den Status

    try {
      // API-Anfrage an das Backend
      await axios.post("http://localhost:5000/send", formData);
      setStatus("Nachricht erfolgreich gesendet!");
      setFormData({ name: "", email: "", message: "" }); // Formular zurücksetzen
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.");
    }
  };

  return (
    <div className="consultation-page">
      <h1>Jetzt kostenlos beraten</h1>
      <p>Wir freuen uns, Ihnen bei Ihrem Anliegen zu helfen. Bitte füllen Sie das Formular aus oder kontaktieren Sie uns direkt!</p>
      
      <form className="consultation-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ihr Name"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ihre Email"
            required
          />
        </label>
        <label>
          Nachricht:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Ihre Nachricht"
            required
          />
        </label>
        <button type="submit">Senden</button>
      </form>
      <p>{status}</p> {/* Statusnachricht anzeigen */}

      <div className="contact-details">
        <p>Oder kontaktieren Sie uns direkt:</p>
        <p>Email: <a href="ayhemalras@outlook.de">beratung@example.com</a></p>
        <p>Telefon: <a href="tel:+491234567892">+49 123 456 7892</a></p>
      </div>
    </div>
  );
};

export default ConsultationPage;
