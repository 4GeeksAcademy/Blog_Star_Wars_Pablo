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



//Repartir todo en distintas carpetas

//He notado que tarda en cargarse la pagina, nose si es muy pesada la API