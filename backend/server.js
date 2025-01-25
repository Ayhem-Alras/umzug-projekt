require("dotenv").config(); // Load environment variables
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "https://frontend-umzug.vercel.app/", // Replace with your Vercel frontend domain
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(bodyParser.json()); // Parse JSON data

// POST Route for sending emails
app.post("/send", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Bitte alle Felder ausfüllen!" });
  }

  try {
    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your email from environment variables
        pass: process.env.PASSWORD // App password from environment variables
      }
    });

    // Email options
    const mailOptions = {
      from: `"Kontaktformular" <${process.env.EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `Neue Nachricht von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone}\n\nNachricht:\n${message}`
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Nachricht erfolgreich gesendet!" });
  } catch (error) {
    console.error("Fehler beim Senden der Nachricht:", error);
    res.status(500).json({ error: "Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
