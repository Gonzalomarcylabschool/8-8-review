const Car = require('../models/Car');

/* 
These controllers take incoming requests and utilize the
methods provided by the Car "model" before sending a
response back to the client (or an error message).
*/

// Get All (Read)
const serveCars = async (req, res) => {
  const allCarsList = await Car.list();
  res.send(allCarsList);  
}

// Get One (Read)
const serveCar = async (req, res) => {
  const { id } = req.params;
  const fellow = await Car.find(Number(id));

  if (!fellow) {
    return res.status(404).send({
      message: `No fellow with the id ${id}`
    });
  }
  res.send(fellow);
};

// Create
const createCar = async (req, res) => {
  const { carMake, carModel, carYear } = req.body;
  if (!carMake || !carModel || !carYear) {
    return res.status(400).send({ message: "Invalid Name" });
  }

  const newCar = await Car.create(carMake, carModel, carYear);
  res.send(newCar);
};

// Update
const updateCar = async (req, res) => {
  const { fellowName } = req.body;

  if (!fellowName) {
    return res.status(400).send({ message: "Invalid Name" });
  }

  const { id } = req.params;
  const updatedCar = await Car.editName(Number(id), fellowName);

  if (!updatedCar) {
    return res.status(404).send({
      message: `No fellow with the id ${id}`
    });
  }

  res.send(updatedCar);
}

// Delete
const deleteCar = async (req, res) => {
  const { id } = req.params;
  const didDelete = await Car.delete(Number(id));

  if (!didDelete) {
    return res.status(404).send({
      message: `No fellow with the id ${id}`
    });
  }

  res.sendStatus(204);
}

module.exports = {
  serveCars,
  serveCar,
  createCar,
  updateCar,
  deleteCar
};