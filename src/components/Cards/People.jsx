import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PeopleImg from "../../assets/img/PeopleImg.webp";
import "./Card.css"



export const People = () => {

    const [people, setPeople] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        fetchPeople();
    }, []);


    const fetchPeople = async () => {
        try {
            const response = await fetch("https://www.swapi.tech/api/people");

            if (!response.ok) {
                throw new Error("We have not been able to recover the characters");
            }

            const data = await response.json();

            const peopleDetails = await Promise. all (data.results.map(async (characters) => {
                const detailRes = await fetch(characters.url);
                const detailData = await detailRes.json();

                return {
                    id: detailData.result.uid,
                    name: detailData.result.properties.name,
                    gender: detailData.result.properties.gender,
                    hairColor: detailData.result.properties.hair_color,
                    eyeColor: detailData.result.properties.eye_color
                };
            }));

            setPeople(peopleDetails);
        } catch (error) {
            console.error("Error getting characters", error.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <h2 className="text-center">Loading Charanters...</h2>;
    
    return (
        <>
            <div>
                <div>
                    <h1 className="text-danger">Charanters</h1>
                </div>
                <div className="d-flex flex-row flex-nowrap overflow-auto gap-3 p-2">
                {people.map(characters => (
                    <div key={characters.id} className="card" style={{ width: "18rem", flex: "0 0 auto" }}>
                    <img src={PeopleImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h2>{characters.name}</h2>
                        <p>Gender: <span className="text-info"> {characters.gender}</span></p>
                        <p>Hair Color: <span className="text-info"> {characters.hairColor}</span></p>
                        <p>Eye-Color: <span className="text-info"> {characters.eyeColor}</span></p>
                    </div>
                    <div className="m-2">
                        <button className="learnMore" onClick={() => navigate(`/peopledata/${characters.id}`)}>Learn more!</button>
                        <button className="favoriteButton"><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
                ))}
                </div>
            </div>
        </>
    );
};

//Hacer que el button de favoritos se cambie de icono cuando agregas a favoritos