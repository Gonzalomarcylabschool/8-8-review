const express = require('express');
const path = require('path');
const logRoutes = require('./utils/logRoutes');

const {
  serveCars,
  createCar,
} = require('./controllers/carsControllers');


const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../frontend/dist')));
// Log all routes
app.use(logRoutes);

// API routes
app.get('/api/cars', serveCars);
app.post('/api/cars', createCar);
// Serve the frontend application

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
}
);
// Start the server
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
