import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PeopleImg from "../../.././assets/img/PeopleImg.webp";
import "../SpecificCards.css";


export const PeopleData = () => {

    const [character, setCharacter] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
                const data = await res.json();
                setCharacter(data.result.properties);
            } catch (error) {
                console.error("Error loading character:", error.message);
            }
        };
        fetchCharacter();
    }, [id]);

    if (!character) return <h2>Loading...</h2>;

    return (
        <>
            <div className="bg-dark-subtle">
                <div className="d-flex"> {/* IMG, Name and Description zone */}
                    <div className="m-5"> {/* IMG Zone*/}
                        <img className="imgDimensions" src={PeopleImg} />
                    </div>
                    <div className="m-5"> {/* Name and Description Zone*/}
                        <h1 className="text-danger">{character.name}</h1>
                        <p>
                            <strong>
                                A character from the Star Wars saga,<br />
                                the API does not contain specific descriptions for each character,<br />
                                so I'll leave this space for possible future API updates.
                            </strong>
                        </p>
                    </div>
                </div>
                <div className="datsZone container row"> {/* Specific Datas */}
                    <div className="col-2">
                        <h2>Name</h2>
                        <p>{character.name}</p>
                    </div>
                    <div className="col-2">
                        <h2>Birth Year</h2>
                        <p>{character.birth_year}</p>
                    </div>
                    <div className="col-2">
                        <h2>Gender</h2>
                        <p>{character.gender}</p>
                    </div>
                    <div className="col-2">
                        <h2>Height</h2>
                        <p>{character.height}</p>
                    </div>
                    <div className="col-2">
                        <h2>Skin Color</h2>
                        <p>{character.skin_color}</p>
                    </div>
                    <div className="col-2">
                        <h2>Eye Color</h2>
                        <p>{character.eye_color}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

//Como la API no tenia descripción separada de los personajes agregare una general, abierto a actualizaciones de API