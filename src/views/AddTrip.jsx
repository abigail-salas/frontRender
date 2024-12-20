import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { TripsContext } from "../context/TripsContext";

const AddTrip = () => {
  const { handleAddTrip } = useContext(TripsContext);
  const navigate = useNavigate();

  const onSubmit = async (formValues) => {
    const { destino, presupuesto } = formValues;
    await handleAddTrip(destino, presupuesto);
    navigate("/");
  };

  return (
    <Form
      title="Agregar Nuevo Viaje"
      initialValues={{ destino: "", presupuesto: "" }}
      onSubmit={onSubmit}
      buttonLabel="Agregar"
    />
  );
};

export default AddTrip;
