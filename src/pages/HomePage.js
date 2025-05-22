import React from "react";
import NavBar from "../NavBar";
import Image from "../components/Image";

const HomePage = () => {
    return (
        <div className="homepage">
            <NavBar />
            <h2>Bienvenue sur le site de Hôpital SDV</h2>
            <p>
                Vous pouvez prendre des rendez-vous et accéder à ces derniers directement depuis le site.
            </p>
            <div className="image-container">
                <div className="image-block">
                    <Image src="HSV.png" />
                    <p className="image-caption">Votre santé est notre priorité.</p>
                </div>
                <div className="image-block">
                    <Image src="HSV2.png" />
                    <p className="image-caption">Un accompagnement humain à chaque étape de votre prise en charge.</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;