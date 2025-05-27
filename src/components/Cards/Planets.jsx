import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import PlanetsImg from "../../assets/img/PlanetsImg.jpg";
import "./Card.css"

export const Planets = () => {

    const [planets, setPlanets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        fetchPlanets();
    }, []);


    const fetchPlanets = async () => {
        try {
            const response = await fetch("https://www.swapi.tech/api/planets");

            if (!response.ok) {
                throw new Error("We have not been able to recover the planets");
            }

            const data = await response.json();

            const planetsDetails = await Promise. all (data.results.map(async (planet) => {
                const detailRes = await fetch(planet.url);
                const detailData = await detailRes.json();

                return {
                    id: detailData.result.uid,
                    name: detailData.result.properties.name,
                    diameter: detailData.result.properties.diameter,
                    terrain: detailData.result.properties.terrain,
                    rotationPeriod: detailData.result.properties.rotation_period
                };
            }));

            setPlanets(planetsDetails);
        } catch (error) {
            console.error("Error getting planets", error.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <h2 className="text-center">Loading Planets...</h2>;

    return (
        <>
            <div>
                <div>
                    <h1 className="text-danger">Planets</h1>
                </div>
                <div className="d-flex flex-row flex-nowrap overflow-auto gap-3 p-2">
                {planets.map(planet => (
                    <div key={planet.id} className="card" style={{ width: "18rem", flex: "0 0 auto" }}>
                    <img src={PlanetsImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h2>{planet.name}</h2>
                        <p>Diameter: <span className="text-info">{planet.diameter}</span></p>
                        <p>Rotation Period: <span className="text-info">{planet.rotationPeriod}</span></p>
                        <p>Terrain: <span className="text-info">{planet.terrain}</span></p>                        
                    </div>
                    <div className="m-2">
                        <button className="learnMore" onClick={() => navigate(`/planetsdata/${planet.id}`)}>Learn more!</button>
                        <button className="favoriteButton" onClick={() => dispatch({ type: 'toggle_favorite', payload: planet.name })}>
                            <i className={`fa-${store.favorites.includes(planet.name) ? "solid" : "regular"} fa-heart`}></i>
                        </button>
                    </div>
                </div>
                ))}
                </div>
                
            </div>
        </>
    );
};