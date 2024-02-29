const express = require("express")
const routes = express.Router()

const PlanetController = require("../controller/PlanetController")
const SatelliteController = require("../controller/SatelliteController")
const CapController = require('../controller/CapController')
const SpaceshipController = require('../controller/SpaceshipController')

// Routes planets
routes.post('/planets', PlanetController.store)
routes.get('/planets', PlanetController.index)
routes.put('/planets/:id', PlanetController.put)
routes.delete('/planets/:id', PlanetController.delete)

// Routes satellites
routes.post('/planet/:planetId/satellites', SatelliteController.store)
routes.get('/planet/:planetId/satellites', SatelliteController.index)

// Routes cap
routes.post('/cap', CapController.store)
routes.get('/cap', CapController.index)

// Routes spaceship
routes.post('/caps/:capId/spaceship', SpaceshipController.store)
routes.get('/caps/:capId/spaceship', SpaceshipController.index)

module.exports = routes