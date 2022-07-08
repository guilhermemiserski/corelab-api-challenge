const { Router } = require('express');
const vehicle = require('../models/vehicleModel');
const {createVehicles, updateVehicles, deleteVehicles, getVehicles} = require('../controllers/index')

const routes = Router();

routes.get('/veiculos', getVehicles);


routes.post('/veiculos', createVehicles);


routes.put('/veiculos/:id', updateVehicles);


routes.delete('/veiculos/:id', deleteVehicles);



module.exports = { routes };

