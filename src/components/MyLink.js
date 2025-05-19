import React from "react";

export const MyLink = ({...props}) => {
    return (
        <a href="https://www.example.com" target ="_blank">
            Click here to visit Example.com
            {props.text}
        </a>
    ); // mettre dans une div si il y a plusieurs éléments 
}