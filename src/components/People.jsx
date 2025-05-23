import React from "react";
import "./People.css"



export const People = () => {
    return (
        <>
        <div>
            <h1 className="text-danger">Charanters</h1>
        </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://mieducacionenlinea.com/wp-content/uploads/2024/09/Personajes-Iconicos-Universo-Star-Wars.webp" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2>Insertar Nombre</h2>
                    <p>Gender: GENERO</p>
                    <p>Hair Color: PELO</p>
                    <p>Eye-Color: OJOS</p>
                </div>
                <div className="m-2">
                    <button className="learnMore">Learn more!</button>
                    <button className="favoriteButton"><i className="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </>
    );
};


//Hacer que "Learn More" habra una pestaña de más datos del personaje

//Hacer que el button de favoritos se cambie de icono cuando agregas a favoritos

//Buscar una imagen general de personajes de Star Wars