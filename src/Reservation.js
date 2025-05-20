import React, { useState } from "react";

const Reservation = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [date, setDate] = useState("");
  const [specialite, setSpecialite] = useState("");

  // Validations (raccourci)
  const nomOK = /^[A-Za-zÀ-ÿ\s\-]+$/.test(nom);
  const prenomOK = /^[A-Za-zÀ-ÿ\s\-]+$/.test(prenom);
  const dateOK = date && new Date(date) > new Date(new Date().setHours(0,0,0,0));

  const canSubmit = nom && prenom && date && specialite && nomOK && prenomOK && dateOK;

  const handleSubmit = () => {
    // On crée l'objet réservation
    const nouvelleResa = {
      nom,
      prenom,
      date,
      specialite,
      etat: "En attente de confirmation"
    };

    // On récupère l'existant ou un tableau vide
    const toutesResa = JSON.parse(localStorage.getItem("mesRDVs") || "[]");
    toutesResa.push(nouvelleResa);

    // On réécrit dans le LocalStorage
    localStorage.setItem("mesRDVs", JSON.stringify(toutesResa));

    // On peut vider le formulaire
    setNom("");
    setPrenom("");
    setDate("");
    setSpecialite("");
    alert("Réservation enregistrée !");
  };

  return (
    <div>
      <p>Nom :</p>
      <input value={nom} onChange={e => setNom(e.target.value)} type="text" />
      {!nomOK && nom && <small style={{color:"red"}}>Pas de chiffres !</small>}

      <p>Prénom :</p>
      <input value={prenom} onChange={e => setPrenom(e.target.value)} type="text" />
      {!prenomOK && prenom && <small style={{color:"red"}}>Pas de chiffres !</small>}

      <p>Date du rdv :</p>
      <input value={date} onChange={e => setDate(e.target.value)} type="date" />
      {!dateOK && date && <small style={{color:"red"}}>Doit être après aujourd’hui</small>}

      <p>Spécialité :</p>
      <select value={specialite} onChange={e => setSpecialite(e.target.value)}>
        <option value="">--Choisissez--</option>
        <option value="Généraliste">Généraliste</option>
        <option value="Chirurgien">Chirurgien</option>
        <option value="Cardiologue">Cardiologue</option>
        <option value="Radiologue">Radiologue</option>
        <option value="Pédiatre">Pédiatre</option>
        <option value="Neurologue">Neurologue</option>
      </select>

      <br /><br />
      <button onClick={handleSubmit} disabled={!canSubmit}>
        Valider
      </button>
    </div>
  );
};

export default Reservation;
