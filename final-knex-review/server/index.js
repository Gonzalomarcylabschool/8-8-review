const express = require('express');
const path = require('path');
const logRoutes = require('./utils/logRoutes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../frontend/dist')));
// 
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
