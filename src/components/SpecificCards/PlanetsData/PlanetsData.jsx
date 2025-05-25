import React from "react";
import "../SpecificCards.css"


export const PlanetsData = () => {
    return (
        <>
            <div className="bg-dark-subtle">
                <div className="d-flex"> {/* IMG, Name and Description zone */}
                    <div className="m-5"> {/* IMG Zone*/}
                        <img className="imgDimensions" src="https://www.tendencias21.es/photo/art/grande/8030293-12502202.jpg?v=1437035337" />
                    </div>
                    <div className="m-5"> {/* Name and Description Zone*/}
                        <h1 className="text-danger">NOMBRE</h1>
                        <p>INSERTAR DESCRIPCIÓN GENERAL</p>
                    </div>
                </div>
                <div className="datsZone container row"> {/* Specific Datas */}
                    <div className="col-2">
                        <h2>Name</h2>
                        <p>INSERTAR</p>
                    </div>
                    <div className="col-2">
                        <h2>Birth Year</h2>
                        <p>INSERTAR</p>
                    </div>
                    <div className="col-2">
                        <h2>Gender</h2>
                        <p>INSERTAR</p>
                    </div>
                    <div className="col-2">
                        <h2>Height</h2>
                        <p>INSERTAR</p>
                    </div>
                    <div className="col-2">
                        <h2>Skin Color</h2>
                        <p>INSERTAR</p>
                    </div>
                    <div className="col-2">
                        <h2>Eye Color</h2>
                        <p>INSERTAR</p>
                    </div>
                </div>
            </div>
        </>
    );
};