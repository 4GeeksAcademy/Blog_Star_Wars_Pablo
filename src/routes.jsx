import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { PeopleData } from "./components/SpecificCards/PeopleData/PeopleData";
import { PlanetsData } from "./components/SpecificCards/PlanetsData/PlanetsData";
import { VehiclesData } from "./components/SpecificCards/VehiclesData/VehiclesData";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
        <Route path= "/" element={<Home />} />
        <Route path="/single/:theId" element={ <Single />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/peopledata/:id" element= {<PeopleData />} />
        <Route path="/planetsdata/:id" element= {<PlanetsData />} />
        <Route path="/vehiclesdata/:id" element= {<VehiclesData />} />
      </Route>
    )
);