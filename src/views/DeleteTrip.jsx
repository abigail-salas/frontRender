import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TripsContext } from "../context/TripsContext";

const DeleteTrip = () => {
  const { id } = useParams();
  const { trips, handleDeleteTrip } = useContext(TripsContext);
  const [trip, setTrip] = useState({ destino: "", presupuesto: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const selectedTrip = trips.find((trip) => trip.id === parseInt(id));
    if (selectedTrip) {
      setTrip(selectedTrip);
    }
  }, [id, trips]);

  const onDelete = async () => {
    if (
      window.confirm(
        `¿Estás seguro de que deseas eliminar el viaje a ${trip.destino} con un presupuesto de $${trip.presupuesto}?`
      )
    ) {
      await handleDeleteTrip(id);
      navigate("/");
    }
  };

  return (
    <div className="container">
      <h1>Eliminar Viaje</h1>
      <p>Destino: {trip.destino}</p>
      <p>Presupuesto: ${trip.presupuesto}</p>
      <button onClick={onDelete} className="delete">
        Eliminar
      </button>
      <button onClick={() => navigate("/")}>Cancelar</button>
    </div>
  );
};

export default DeleteTrip;
