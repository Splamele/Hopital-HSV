import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <nav>
        <h1>Hopital SDV</h1>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/book">Prendre RDV</Link></li>
            <li><Link to="/dashboard">Mes RDV</Link></li>
        </ul>
    </nav>)
}

export default NavBar;