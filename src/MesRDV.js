import React, { useEffect, useState } from "react";

const MesRDV = () => {
  const [rdvs, setRdvs] = useState([]);

  useEffect(() => {
    // Récupère et parse le tableau de réservations
    const toutesResa = JSON.parse(localStorage.getItem("mesRDVs") || "[]");
    setRdvs(toutesResa);
  }, []);

  if (rdvs.length === 0) {
    return <p>Vous n'avez pas encore de réservation.</p>;
  }

  return (
    <div>
      <h2>Mes rendez-vous</h2>
      {rdvs.map((r, i) => (
        <div key={i} style={{border:"1px solid #ccc", padding:"8px", margin:"8px 0"}}>
          <p><strong>État :</strong> {r.etat}</p>
          <p><strong>Date :</strong> {new Date(r.date).toLocaleDateString()}</p>
          <p><strong>Nom :</strong> {r.nom} {r.prenom}</p>
          <p><strong>Spécialité :</strong> {r.specialite}</p>
        </div>
      ))}
    </div>
  );
};

export default MesRDV;
