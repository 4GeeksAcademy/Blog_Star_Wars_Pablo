import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {

	return (
		<>
		<div className="p-5 bg-dark-subtle"></div>
		<nav class="navbar navbar-dark bg-dark fixed-top">
			<div class="container-fluid">
				<Link to="/">
				<img id="logoNavbar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png" />
				</Link>
				<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar">
					<div> {/*Zona de favoritos */}

					</div>
				</div>
			</div>
		</nav>
		</>
	);
};



//Decidi usar un desplegable para los favoritos ya que me parecia más comodo en caso de tener muchas cosas seleccionadas en favoritos