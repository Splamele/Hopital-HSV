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

// Enregistrement de réservation
app.post("/api/reservation", (req, res) => {
  const { nom, prenom, date_rdv, specialite} = req.body;
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
