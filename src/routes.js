const express = require("express")
const routes = express.Router()

const PlanetController = require("../controller/PlanetController")

// Routes 
routes.post('/planets', PlanetController.store)
routes.get('/planets', PlanetController.index)
routes.put('/planets/:id', PlanetController.put)
routes.delete('/planets/:id', PlanetController.delete)

module.exports = routes