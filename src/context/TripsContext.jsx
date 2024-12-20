import React, { createContext, useState, useEffect } from "react";
import { getTrips, addTrip, editTrip, deleteTrip } from "../services/api";

export const TripsContext = createContext();

export const TripsProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const data = await getTrips();
      setTrips(data);
    } catch (error) {
      console.error(error);
      alert("Error al obtener los viajes");
    }
  };

  const handleAddTrip = async (destino, presupuesto) => {
    try {
      await addTrip(destino, presupuesto);
      fetchTrips();
    } catch (error) {
      console.error(error);
      alert("Error al agregar el viaje");
    }
  };

  const handleEditTrip = async (id, presupuesto) => {
    try {
      await editTrip(id, presupuesto);
      fetchTrips();
    } catch (error) {
      console.error(error);
      alert("Error al modificar el presupuesto");
    }
  };

  const handleDeleteTrip = async (id) => {
    try {
      await deleteTrip(id);
      fetchTrips();
    } catch (error) {
      console.error(error);
      alert("Error al eliminar el viaje");
    }
  };

  return (
    <TripsContext.Provider
      value={{
        trips,
        handleAddTrip,
        handleEditTrip,
        handleDeleteTrip,
      }}
    >
      {children}
    </TripsContext.Provider>
  );
};