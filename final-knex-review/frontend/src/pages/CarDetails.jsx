/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getCarById, updateCarModel, deleteCar } from '../adapters/carAdapters';

const CarDetails = () => {
  const [car, setCar] = useState({})
  const [newCarModel, setNewCarModel] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  // on load, get the fellow by id
  useEffect(() => {
    const doFetch = async () => {
      // eslint-disable-next-line no-unused-vars
      const [foundCar, error] = await getCarById(id);
      setCar(foundCar);
    };
    doFetch();
  }, [])

  // when the delete button is pressed, send a DELETE request
  const handleDeleteCar = async () => {
    await deleteCar(id);
    navigate('/');
  }

  // when the form is filled out, send a PATCH request
  const handleUpdateCar = async (e) => {
    e.preventDefault();

    const [updatedCar, error] = await updateCarModel(id, newCarModel);
    setCar(updatedCar);

    setNewCarModel('');
  }

  return (
    <>
      <Link to='/'>Go Home</Link>
      <h1>Car Details</h1>
      <p>Make: {car.make}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <p>Id: {car.id}</p>
      <form onSubmit={handleUpdateCar}>
        <label htmlFor="name">Update Car Model</label>
        <input type="text" name="name" id="name" value={newCarModel} onChange={(e) => setNewCarModel(e.target.value)} placeholder='New Name' />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleDeleteCar} className='danger'>Delete Car</button>
    </>
  )
}

export default CarDetails;