import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cars/:id" element={<CarDetails />}></Route>
    </Routes>
  )
}

export default App
