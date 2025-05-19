import React from "react";
import NavBar from "../NavBar";
import Reservation from "../Reservation";

const BookPage = () => {
    return (
        <div>
            <NavBar />
            <h2>Réserver</h2>
            <p>Merci de remplir les champs pour prendre votre rdv</p>
            <Reservation />
        </div>
    );
}

export default BookPage;