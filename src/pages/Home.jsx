import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { People } from "../components/People.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<>
		<div className="bg-dark-subtle p-2">
			<div>
				< People />
			</div>
		<div>
			<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
				<Link to="/prueba"> <span>pulse para prueba</span></Link>
			</p>
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
		</div>
		</div>
		</>
	);
}; 



//Recordar borrar la view de prueba

//Repartir todo en distintas carpetas