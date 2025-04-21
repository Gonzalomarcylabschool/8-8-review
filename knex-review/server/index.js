const express = require('express');
const path = require('path');

const {
  serveCars,
  createCar,
} = require('./controllers/carsControllers');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/api/cars', serveCars);
app.post('api/cars', createCar);

app.listen(PORT, () => { 
  console.log(`Server is running on http://localhost:${PORT}`);
});