import React, { useState } from "react";

const Reservation = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [date_rdv, setDate] = useState("");
  const [specialite, setSpecialite] = useState("");

  const handleSubmit = () => {
    const nameRegex = /^[A-Za-zÀ-ÿ\s'-]+$/;

    if (!nom || !prenom || !date_rdv || !specialite) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    if (!nameRegex.test(nom) || !nameRegex.test(prenom)) {
      alert("Le nom et le prénom doivent contenir uniquement des lettres. ");
      return;
    }

    const now = new Date();
    const rdvDate = new Date(date_rdv);
    if (rdvDate <= now) {
      alert("La date du rendez-vous doit être dans le futur.");
      return;
    }

    fetch("http://localhost:3001/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nom, prenom, date_rdv, specialite })
    })
      .then(res => res.text())
      .then(msg => alert(msg));
  };

  return (
    <div>
      <p>Nom :</p>
      <input type="text" onChange={e => setNom(e.target.value)} />

      <p>Prénom :</p>
      <input type="text" onChange={e => setPrenom(e.target.value)} />

      <p>Date du rendez-vous :</p>
      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        onChange={e => setDate(e.target.value)}
      />

      <p>Spécialité :</p>
      <select onChange={e => setSpecialite(e.target.value)}>
        <option value="">-- Choisissez --</option>
        <option value="Generaliste">Généraliste</option>
        <option value="Cardiologue">Cardiologue</option>
        <option value="Radiologue">Radiologue</option>
        <option value="Pédiatre">Pédiatre</option>
        <option value="Chirurgien">Chirurgien</option>
        <option value="Neurologue">Neurologue</option>
      </select>

      <br /><br />
      <button onClick={handleSubmit}>Valider</button>
    </div>
  );
};

export default Reservation;
