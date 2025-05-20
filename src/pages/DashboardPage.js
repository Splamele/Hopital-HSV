import React from "react";
import NavBar from "../NavBar";
import MesRDV from "../MesRDV";

const DashboardPage = () => {
    return (
        <div>
            <NavBar />
            <h2>Tableau de bord</h2>
            <MesRDV />
        </div>
    );
}

export default DashboardPage;