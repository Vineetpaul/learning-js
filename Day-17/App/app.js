const express = require('express');

const jobRoutes = require('../routes/jobRouter');
const notFound = require('../middleware/notFound');
const errorHandler = require('../middleware/errorHandler');

const app = express();

app.use(express.json());

app.use('/api/jobs',jobRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;