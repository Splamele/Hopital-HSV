import React, { useEffect, useState } from "react";

const MesRDV = () => {
  const [rdvs, setRdvs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/rdvs")
      .then(res => res.json())
      .then(data => setRdvs(data));
  }, []);

  if (rdvs.length === 0) return <p>Aucun rendez-vous</p>;

  return (
    <div>
      <h2>Mes rendez-vous</h2>
      {rdvs.map(r => (
        <div key={r.id} style={{ border: "1px solid #ccc", margin: "8px", padding: "8px" }}>
          <p><strong>Nom :</strong> {r.nom} {r.prenom}</p>
          <p><strong>Date :</strong> {new Date(r.date_rdv).toLocaleDateString()}</p>
          <p><strong>Spécialité :</strong> {r.specialite}</p>
          <p><strong>État :</strong> {r.etat}</p>
        </div>
      ))}
    </div>
  );
};

export default MesRDV;
