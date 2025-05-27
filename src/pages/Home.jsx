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