import React, { useState, useEffect } from "react";
import "./Card.css"



export const People = () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetchPeople();
    }, []);


    const fetchPeople = async () => {
        try {
            const response = await fetch("https://www.swapi.tech/api/people");

            if (!response.ok) {
                throw new Error("We have not been able to recover the contacts"); //MODIFICAR
            }

            const data = await response.json();

            const formattedPeople = data.results.map(characters => ({
                id: characters.id,
                name: characters.name,
                gender: characters.gender,
                hairColor: characters.hairColor,
                eyeColor: characters.eyeColor
            }));

            setPeople(formattedPeople);
        } catch (error) {
            console.error("Error getting contacts", error.message); //MODIFICAR
        }
    };
    return (
        <>
            <div>
                <div>
                    <h1 className="text-danger">Charanters</h1>
                </div>
                <div className="d-flex flex-row flex-nowrap overflow-auto gap-3 p-2">
                {people.map(characters => (
                    <div key={characters.id} className="card" style={{ width: "18rem", flex: "0 0 auto" }}>
                    <img src="https://mieducacionenlinea.com/wp-content/uploads/2024/09/Personajes-Iconicos-Universo-Star-Wars.webp" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h2>{characters.name}</h2>
                        <p>Gender: {characters.gender}</p>
                        <p>Hair Color: {characters.hairColor}</p>
                        <p>Eye-Color: {characters.eyeColor}</p>
                    </div>
                    <div className="m-2">
                        <button className="learnMore">Learn more!</button>
                        <button className="favoriteButton"><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
                ))}
                </div>
                
            </div>
        </>
    );
};


//Falta agregar datos como color de pelo o genero

//Hacer que "Learn More" habra una pestaña de más datos del personaje

//Hacer que el button de favoritos se cambie de icono cuando agregas a favoritos