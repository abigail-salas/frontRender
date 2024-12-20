import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TripsContext } from "../context/TripsContext";

const Home = () => {
  const { trips } = useContext(TripsContext);

  return (
    <div className="container">
      <h1>Lista de Viajes</h1>
      <Link to="/add" className="link-button add">
        Agregar Nuevo Viaje
      </Link>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            {trip.destino} - ${trip.presupuesto}
            <Link to={`/edit/${trip.id}`} className="link-button edit">
              Editar
            </Link>
            <Link to={`/delete/${trip.id}`} className="link-button delete">
              Eliminar
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
