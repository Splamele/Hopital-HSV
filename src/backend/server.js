const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // ou ton mot de passe MySQL
  database: "hopital_sdv"
});

db.connect(err => {
  if (err) throw err;
  console.log("Connecté à MySQL !");
});

app.post("/api/reservation", (req, res) => {
  const { nom, prenom, date_rdv, specialite } = req.body;

  // Vérifie que nom et prénom ne contiennent que des lettres
  const nameRegex = /^[A-Za-zÀ-ÿ\s'-]+$/;
  if (!nameRegex.test(nom) || !nameRegex.test(prenom)) {
    return res.status(400).send("Le nom et le prénom ne doivent contenir que des lettres.");
  }

  // Vérifie que la date est dans le futur
  const now = new Date();
  const rdvDate = new Date(date_rdv);
  if (isNaN(rdvDate.getTime()) || rdvDate <= now) {
    return res.status(400).send("La date du rendez-vous doit être dans le futur.");
  }

  const sql = "INSERT INTO reservations (nom, prenom, date_rdv, specialite, statut) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [nom, prenom, date_rdv, specialite, "en attente"], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Réservation enregistrée !");
  });
});


// Liste des rendez-vous
app.get("/api/rdvs", (req, res) => {
  db.query("SELECT * FROM reservations", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log("Serveur backend sur http://localhost:3001");
});
