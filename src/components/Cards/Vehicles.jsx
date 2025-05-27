import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import VehiclesImg from "../../assets/img/VehiclesImg.webp";
import "./Card.css"


export const Vehicles = () => {

    const [vehicles, setVehicles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        fetchVehicles();
    }, []);


    const fetchVehicles = async () => {
        try {
            const response = await fetch("https://www.swapi.tech/api/vehicles");

            if (!response.ok) {
                throw new Error("We have not been able to recover the vehicles");
            }

            const data = await response.json();

            const vehiclesDetails = await Promise. all (data.results.map(async (vehicle) => {
                const detailRes = await fetch(vehicle.url);
                const detailData = await detailRes.json();

                return {
                    id: detailData.result.uid,
                    name: detailData.result.properties.name,
                    model: detailData.result.properties.model,
                    vehicleClass: detailData.result.properties.vehicle_class,
                    manufacturer: detailData.result.properties.manufacturer
                };
            }));

            setVehicles(vehiclesDetails);
        } catch (error) {
            console.error("Error getting vehicles", error.message);
        }finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <h2 className="text-center">Loading Vehicles...</h2>;

    return (
        <>
            <div>
                <div>
                    <h1 className="text-danger">Vehicles</h1>
                </div>
                <div className="d-flex flex-row flex-nowrap overflow-auto gap-3 p-2">
                {vehicles.map(vehicle => (
                    <div key={vehicle.id} className="card" style={{ width: "18rem", flex: "0 0 auto" }}>
                    <img src={VehiclesImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h2>{vehicle.name}</h2>
                        <p>Model: <span className="text-info">{vehicle.model}</span></p>
                        <p>Vehicle Class: <span className="text-info">{vehicle.vehicleClass}</span></p>
                        <p>Manufacturer: <span className="text-info">{vehicle.manufacturer}</span></p>
                    </div>
                    <div className="m-2">
                        <button className="learnMore" onClick={() => navigate(`/vehiclesdata/${vehicle.id}`)}>Learn more!</button>
                        <button className="favoriteButton" onClick={() => dispatch({ type: 'toggle_favorite', payload: vehicle.name })}>
                            <i className={`fa-${store.favorites.includes(vehicle.name) ? "solid" : "regular"} fa-heart`}></i>
                        </button>
                    </div>
                </div>
                ))}
                </div>
                
            </div>
        </>
    );
};