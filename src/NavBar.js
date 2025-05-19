import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/book">Reserver</Link></li>
            <li><Link to="/dashboard">Tableau de bord</Link></li>
        </ul>
    </nav>)
}

export default NavBar;