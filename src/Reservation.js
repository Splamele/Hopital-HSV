import React from "react";

const Reservation = () => {
    return (
        <div>
            <p>Nom : </p>
            <input type="text" placeholder="Ecrivez ici"></input>
            <p>Prénom : </p>
            <input type="text" placeholder="Ecrivez ici"></input>
            <p>Date du rdv : </p>
            <input type="date"></input>
            <p>Spécialité : </p>
            <select>
                <option value="choix1">Generaliste</option>
                <option value="choix2">Chirurgien</option>
                <option value="choix3">Cardiologue</option>
                <option value="choix4">Radiologue</option>
                <option value="choix5">Pédiatre</option>
                <option value="choix6">Neurologue</option>
            </select>
        </div>
    );
}

export default Reservation;