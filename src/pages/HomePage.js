import React from "react";
import NavBar from "../NavBar";
import Image from "../components/Image";

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <h1>Hopital HSV</h1>
            <p>Bienvenue sur le site de Hôpital SDV, vous pouvez prendre des rendez-vous et accéder a ces dernier directement depuis le site </p>
            <div className="image-container">
                <Image src="HSV.png" />
                <Image src="HSV2.png" />
            </div>
        </div>
    );
}

export default HomePage;