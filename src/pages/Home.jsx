import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { People } from "../components/People.jsx";
import { Planets } from "../components/Planets.jsx";
import { Vehicles } from "../components/Vehicles.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<>
			<div className="bg-dark-subtle">
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