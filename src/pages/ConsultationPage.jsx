import { useState } from "react";
import axios from "axios";
import "./ConsultationPage.css";

const ConsultationPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Nachricht wird gesendet...");

    try {
      const response = await axios.post("http://localhost:5000/send", formData);
      setStatus(response.data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Fehler:", error);
      setStatus("Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.");
    }
  };

  return (
    <div className="consultation-page">
      <h1>Jetzt kostenlos beraten</h1>
      <p>Bitte füllen Sie das Formular aus:</p>
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
          Telefon:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ihre Telefonnummer"
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
      <p>{status}</p>

      {/* Kontaktinformationen deutlicher anzeigen */}
      <div className="contact-highlight">
        <h2>Kontaktieren Sie uns direkt</h2>
        <p>
          📧 <strong>Email:</strong>{" "}
          <a href="mailto:umzug.de.nrw@gmail.com">umzug.de.nrw@gmail.com</a>
        </p>
        <p>
          📞 <strong>Telefon:</strong>{" "}
          <a href="tel:+4915751054032">+49 1575 1054032</a>
        </p>
      </div>
    </div>
  );
};

export default ConsultationPage;
