import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../SpecificCards.css"


export const VehiclesData = () => {

    const [vehicle, setVehicle] = useState(null);
    
        const { id } = useParams();
    
        useEffect(() => {
            const fetchVehicle = async () => {
                try {
                    const res = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
                    const data = await res.json();
                    setVehicle(data.result.properties);
                } catch (error) {
                    console.error("Error loading vehicle:", error.message);
                }
            };
            fetchVehicle();
        }, [id]);
    
        if (!vehicle) return <h2>Loading...</h2>;

    return (
        <>
            <div className="bg-dark-subtle">
                <div className="d-flex"> {/* IMG, Name and Description zone */}
                    <div className="m-5"> {/* IMG Zone*/}
                        <img className="imgDimensions" src="" />
                    </div>
                    <div className="m-5"> {/* Name and Description Zone*/}
                        <h1 className="text-danger">{vehicle.name}</h1>
                        <p>INSERTAR DESCRIPCIÓN GENERAL</p>
                    </div>
                </div>
                <div className="datsZone container row"> {/* Specific Datas */}
                    <div className="col-2">
                        <h2>Name</h2>
                        <p>{vehicle.name}</p>
                    </div>
                    <div className="col-2">
                        <h2>Model</h2>
                        <p>{vehicle.model}</p>
                    </div>
                    <div className="col-2">
                        <h2>Manufacturer</h2>
                        <p>{vehicle.manufacturer}</p>
                    </div>
                    <div className="col-2">
                        <h2>Passengers</h2>
                        <p>{vehicle.passengers}</p>
                    </div>
                    <div className="col-2">
                        <h2>Length</h2>
                        <p>{vehicle.length}</p>
                    </div>
                    <div className="col-2">
                        <h2>Created</h2>
                        <p>{vehicle.created}</p>
                    </div>
                </div>
            </div>
        </>
    );
};