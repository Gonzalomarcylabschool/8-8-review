import handleFetch from "./handleFetch"

export const getAllCars = async () => {
  const [allCars, error] = await handleFetch('/api/cars/')
  return [allCars, error];
}

export const getCarById = async (id) => {
  const [car, error] = await handleFetch(`/api/cars/${id}`);
  return [car, error];
}

export const createCar = async (CarMake, carModel, carYear ) => {
  const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ CarMake, carModel, carYear })
  }

  const [newCar, error] = await handleFetch(`/api/cars/`, options);
  return [newCar, error];
}

export const deleteCar = async (id) => {
  const options = {
    method: "DELETE",
  };
  const [success, error] = await handleFetch(`/api/cars/${id}`, options);
  return [success, error];
}

export const updateCarModel = async (id, fellowModel) => {
  const options = {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ fellowModel })
  };

  const [updatedCar, error] = await handleFetch(`/api/cars/${id}`, options);
  return [updatedCar, error];
}