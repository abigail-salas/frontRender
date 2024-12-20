const API_URL = "http://localhost:3000/viajes";

// Obtener todos los viajes
export const getTrips = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error al obtener los viajes");
  }
  return await response.json();
};

// Agregar un nuevo viaje
export const addTrip = async (destino, presupuesto) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ destino, presupuesto }),
  });
  if (!response.ok) {
    throw new Error("Error al agregar el viaje");
  }
};

// Editar un viaje
export const editTrip = async (id, presupuesto) => {
  const response = await fetch(`${API_URL}/${id}?presupuesto=${presupuesto}`, {
    method: "PUT",
  });
  if (!response.ok) {
    throw new Error("Error al modificar el presupuesto");
  }
};

// Eliminar un viaje
export const deleteTrip = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error al eliminar el viaje");
  }
};
