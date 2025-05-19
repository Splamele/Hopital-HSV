import React, { useState } from "react";

const Reservation = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [date, setDate] = useState("");
  const [specialite, setSpecialite] = useState("");

  // Fonctions de validation
  const nomEstValide = /^[A-Za-zÀ-ÿ\s\-]+$/.test(nom);
  const prenomEstValide = /^[A-Za-zÀ-ÿ\s\-]+$/.test(prenom);

  const dateEstValide = (() => {
    if (!date) return false;
    const aujourdHui = new Date();
    const dateChoisie = new Date(date);
    // Supprimer l'heure pour une comparaison de dates uniquement
    aujourdHui.setHours(0, 0, 0, 0);
    return dateChoisie > aujourdHui;
  })();

  const tousLesChampsRemplis =
    nom && prenom && date && specialite &&
    nomEstValide && prenomEstValide && dateEstValide;

  const handleSubmit = () => {
    alert("Réservation validée !");
  };

  return (
    <div>
      <p>Nom :</p>
      <input
        type="text"
        placeholder="Écrivez ici"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      {!nomEstValide && nom && <p style={{ color: "red" }}>Le nom ne doit pas contenir de chiffres.</p>}

      <p>Prénom :</p>
      <input
        type="text"
        placeholder="Écrivez ici"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
      />
      {!prenomEstValide && prenom && <p style={{ color: "red" }}>Le prénom ne doit pas contenir de chiffres.</p>}

      <p>Date du rdv :</p>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      {!dateEstValide && date && <p style={{ color: "red" }}>La date doit être après aujourd'hui.</p>}

      <p>Spécialité :</p>
      <select value={specialite} onChange={(e) => setSpecialite(e.target.value)}>
        <option value="">-- Choisissez une spécialité --</option>
        <option value="generaliste">Généraliste</option>
        <option value="chirurgien">Chirurgien</option>
        <option value="cardiologue">Cardiologue</option>
        <option value="radiologue">Radiologue</option>
        <option value="pediatre">Pédiatre</option>
        <option value="neurologue">Neurologue</option>
      </select>

      <br /><br />
      <button onClick={handleSubmit} disabled={!tousLesChampsRemplis}>
        Valider
      </button>
    </div>
  );
};

export default Reservation;
