import React from "react";

const Image = ({src}) => {
    return <img className="image-item" src={`/images/${src}`} alt={src} />;
}

export default Image;