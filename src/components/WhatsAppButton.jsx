
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/4915209473258" // Ihre Telefonnummer (mit Ländervorwahl, ohne + oder Leerzeichen)
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
