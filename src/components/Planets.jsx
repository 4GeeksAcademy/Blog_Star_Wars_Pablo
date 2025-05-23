import React, { useState, useEffect } from "react";
import "./Card.css"



export const Planets = () => {

    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        fetchPlanets();
    }, []);


    const fetchPlanets = async () => {
        try {
            const response = await fetch("https://www.swapi.tech/api/planets");

            if (!response.ok) {
                throw new Error("We have not been able to recover the contacts"); //MODIFICAR
            }

            const data = await response.json();

            const formattedPlanets = data.results.map(planet => ({
                id: planet.id,
                name: planet.name,

            }));

            setPlanets(formattedPlanets);
        } catch (error) {
            console.error("Error getting contacts", error.message); //MODIFICAR
        }
    };
    return (
        <>
            <div>
                <div>
                    <h1 className="text-danger">Planets</h1>
                </div>
                <div className="d-flex flex-row flex-nowrap overflow-auto gap-3 p-2">
                {planets.map(planet => (
                    <div key={planet.id} className="card" style={{ width: "18rem", flex: "0 0 auto" }}>
                    <img src="https://www.tendencias21.es/photo/art/grande/8030293-12502202.jpg?v=1437035337" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h2>{planet.name}</h2>
                        
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