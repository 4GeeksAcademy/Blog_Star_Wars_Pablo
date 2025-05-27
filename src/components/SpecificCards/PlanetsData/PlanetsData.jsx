import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlanetsImg from "../../.././assets/img/PlanetsImg.jpg";
import "../SpecificCards.css";


export const PlanetsData = () => {

    const [planet, setPlanet] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const res = await fetch(`https://www.swapi.tech/api/planets/${id}`);
                const data = await res.json();
                setPlanet(data.result.properties);
            } catch (error) {
                console.error("Error loading planet:", error.message);
            }
        };
        fetchPlanet();
    }, [id]);

    if (!planet) return <h2>Loading...</h2>;

    return (
        <>
            <div className="bg-dark-subtle">
                <div className="d-flex"> {/* IMG, Name and Description zone */}
                    <div className="m-5"> {/* IMG Zone*/}
                        <img className="imgDimensions" src={PlanetsImg} />
                    </div>
                    <div className="m-5"> {/* Name and Description Zone*/}
                        <h1 className="text-danger">{planet.name}</h1>
                        <p>
                            <strong>
                                A Planet from the Star Wars saga,<br />
                                the API does not contain specific descriptions for each planet,<br />
                                so I'll leave this space for possible future API updates.
                            </strong>
                        </p>
                    </div>
                </div>
                <div className="datsZone container row"> {/* Specific Datas */}
                    <div className="col-2">
                        <h2>Name</h2>
                        <p>{planet.name}</p>
                    </div>
                    <div className="col-2">
                        <h2>Diameter</h2>
                        <p>{planet.diameter}</p>
                    </div>
                    <div className="col-2">
                        <h2>Terrain</h2>
                        <p>{planet.terrain}</p>
                    </div>
                    <div className="col-2">
                        <h2>Rotation Period</h2>
                        <p>{planet.rotation_period}</p>
                    </div>
                    <div className="col-2">
                        <h2>Gravity</h2>
                        <p>{planet.gravity}</p>
                    </div>
                    <div className="col-2">
                        <h2>Climate</h2>
                        <p>{planet.climate}</p>
                    </div>
                </div>
            </div>
        </>
    );
};