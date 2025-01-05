const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Email sending route
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send({ error: "All fields are required" });
  }

  try {
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Verwenden Sie Ihren E-Mail-Dienstanbieter
      auth: {
        user: "your-email@example.com", // Ihre E-Mail-Adresse
        pass: "your-email-password",   // Ihr E-Mail-Passwort (oder App-Passwort)
      },
    });

    const mailOptions = {
      from: email,
      to: "ayhemalras@outlook.de", // Zieladresse
      subject: `Neue Anfrage von ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nNachricht: ${message}`,
    };

    // Senden der E-Mail
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ error: "Failed to send email" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
