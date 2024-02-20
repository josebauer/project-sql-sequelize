const express = require("express")
const routes = express.Router()

const PlanetController = require("../controller/PlanetController")
const SatelliteController = require("../controller/SatelliteController")

// Routes planets
routes.post('/planets', PlanetController.store)
routes.get('/planets', PlanetController.index)
routes.put('/planets/:id', PlanetController.put)
routes.delete('/planets/:id', PlanetController.delete)

// Routes satellites
routes.post('/planet/:planetId/satellites', SatelliteController.store)
routes.get('/planet/:planetId/satellites', SatelliteController.index)

module.exports = routes