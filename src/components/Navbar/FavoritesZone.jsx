import React from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer";



export const FavoritesZone = () => {

    const { store } = useGlobalReducer();

    return (
        <>
            <div>
                <div>
                    <h1>Favorites <i class="fa-solid fa-heart"></i></h1>
                </div>
                <div> {/* Characters Favorites */}
                    <div class="accordion">
                        <div class="accordion-item"> {/**/}
                            <h2 class="accordion-header">
                                <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                    Favorites List
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    {store.favorites.length === 0 ? (
                                        <p>No favorites added.</p>
                                    ) : (
                                        <ul>
                                            {store.favorites.map((fav, index) => (
                                                <li key={index}>{fav}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


//Los favoritos se borran simplemente volviendo a dar click en corazón de favoritos