import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TripsContext } from "../context/TripsContext";

const EditTrip = () => {
  const { id } = useParams();
  const { trips, handleEditTrip } = useContext(TripsContext);
  const [trip, setTrip] = useState({ destino: "", presupuesto: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const selectedTrip = trips.find((trip) => trip.id === parseInt(id));
    if (selectedTrip) {
      setTrip(selectedTrip);
    }
  }, [id, trips]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleEditTrip(id, trip.presupuesto);
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrip({ ...trip, [name]: value });
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Editar Presupuesto</h1>
      <p>Destino: {trip.destino}</p>
      <input
        type="number"
        name="presupuesto"
        placeholder="Nuevo Presupuesto"
        value={trip.presupuesto}
        onChange={handleChange}
      />
      <button type="submit">Guardar Cambios</button>
    </form>
  );
};

export default EditTrip;
