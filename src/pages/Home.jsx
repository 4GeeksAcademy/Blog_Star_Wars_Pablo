import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { People } from "../components/Cards/People.jsx";
import { Planets } from "../components/Cards/Planets.jsx";
import { Vehicles } from "../components/Cards/Vehicles.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<>
			<div>
				<div className="p-2 mb-5 ms-4">
					< People />
				</div>
				<div className="p-2 mb-5 ms-4">
					< Planets />
				</div>
				<div className="p-2 mb-5 ms-4">
					< Vehicles />
				</div>
			</div>
		</>
	);
};



//He notado que tarda en cargarse la API y a veces excesivamente, a veces no carga alguna lista pero recargando llega a funcionar

//Los favoritos iba a guardarlos cada uno en su sesión propia (Characters, Planets, Vehicles) pero aunque llego a funcionar volvia mucho más pesada la pagina
// y a veces no cargaba bien los datos de la API y otras veces si

//He quitado varias ideas debido a que ya la pagina tarda en cargarse y si agrego cosas tarda a un más ya veces no llegaba a cargar los datos de la API
//aunque cuando cargaba comprobaba que funcionaba bien el código