import React from "react";



export const FavoritesZone = () => {
    return (
        <>
            <div>
                <div>
                    <h1>Favorites <i class="fa-solid fa-heart"></i></h1>
                </div>
                <div> {/* Characters Favorites */}
                    <div class="accordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                    Characters
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <h5>Insertar Personaje</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};