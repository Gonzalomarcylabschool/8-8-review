import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getAllCars, createCar } from '../adapters/fellowAdapters';

const Home = () => {
  // Get all fellows from the serverstate
  const [cars, setCars] = useState([]);
  // form input state
  const [newCar, setNewCarName] = useState('');
  // form submission response state
  const [newlyAddedCar, setNewlyAddedCar] = useState({})

  // Get me the most up to date full list of fellows
  useEffect(() => {
    const doFetch = async () => {
      const [allFellows, error] = await getAllCars()
      setCars(allFellows);
    }
    doFetch();
  }, [newlyAddedCar])

  // Use the form data to create a POST request to create a new fellow
  const handleCreateFellow = async (e) => {
    e.preventDefault();
    const [newCar, error] = await createCar(newFellowName)
    setNewlyAddedFellow(newCar);
    setNewFellowName('');
  }

  return (
    <>
      <h1>Home</h1>
      <form onSubmit={handleCreateFellow}>
        <h2>Add Fellow</h2>
        <label htmlFor="name">Add A New Fellow</label>
        <input type="text" name="name" id="name" value={newFellowName} onChange={(e) => setNewFellowName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {
          fellows.map((fellow) => {
            return <li key={fellow.id}>
              <Link to={`/fellows/${fellow.id}`}>
                {fellow.name} (User {fellow.id})
              </Link>
            </li>
          })
        }
      </ul >
    </>
  )
}

export default Home;