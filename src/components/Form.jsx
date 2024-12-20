import React, { useState } from "react";

const Form = ({ title, initialValues, onSubmit, buttonLabel }) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <input
        type="text"
        name="destino"
        placeholder="Destino"
        value={formValues.destino}
        onChange={handleChange}
      />
      <input
        type="number"
        name="presupuesto"
        placeholder="Presupuesto"
        value={formValues.presupuesto}
        onChange={handleChange}
      />
      <button type="submit">{buttonLabel}</button>
    </form>
  );
};

export default Form;
