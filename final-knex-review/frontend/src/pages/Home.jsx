/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getAllCars, createCar } from '../adapters/carAdapters';

const Home = () => {
  // Get all fellows from the serverstate
  const [cars, setCars] = useState([]);
  // form input state
  const [newCar, setNewCar] = useState({});
  const [newCarMake, setNewCarMake] = useState('');
  const [newCarModel, setNewCarModel] = useState('');
  const [newCarYear, setNewCarYear] = useState('');
  // form submission response state
  const [newlyAddedCar, setNewlyAddedCar] = useState({})

  // Get me the most up to date full list of fellows
  useEffect(() => {
    const doFetch = async () => {
      const [allCars, error] = await getAllCars()
      setCars(allCars);
    }
    doFetch();
  }, [newlyAddedCar])

  // Use the form data to create a POST request to create a new fellow
  const handleCreateCar = async (e) => {
    e.preventDefault();
    setNewCar({
      make: newCarMake,
      model: newCarModel,
      year: newCarYear
    });
    const [data, error] = await createCar(newCar)
    setNewlyAddedCar(data);
    setNewCar('');
  }

  return (
    <>
      <h1>Home</h1>
      <form onSubmit={handleCreateCar}>
        <h2>Add Carr</h2>
        <label htmlFor="make">Make</label>
        <input type="text" name="make" id="make" value={newCarMake} onChange={(e) => setNewCarMake(e.target.value)} />
        <label htmlFor="model">Model</label>
        <input type="text" name="model" id="model" value={newCarModel} onChange={(e) => setNewCarModel(e.target.value)} />
        <label htmlFor="model">Year</label>
        <input type="text" name="year" id="year" value={newCarYear} onChange={(e) => setNewCarYear(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {
          cars.map((car) => {
            return <li key={car.id}>
              <Link to={`/cars/${car.id}`}>
                {car.make} (Car id: {car.id})
              </Link>
            </li>
          })
        }
      </ul >
    </>
  )
}

export default Home;