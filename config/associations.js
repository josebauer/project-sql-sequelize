const Planet = require('../models/Planet')
const Satellite = require('../models/Satellite')

Planet.hasMany(Satellite, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Satellite.belongsTo(Planet, { foreingKey: 'planetId', as: 'planet' })

module.exports = { Planet, Satellite }