const Spaceship = require('../models/Spaceship')
const Cap = require('../models/Cap')

module.exports = {
  async store(req, res) {
    const { capId } = req.params
    const { name, capacity } = req.body
    const cap = await Cap.findByPk(capId)

    if (!cap) {
      res.send('Erro! Esse capitão não existe!')
    }

    const [spaceship] = await Spaceship.findOrCreate({
      where: { name, capacity }
    })

    await cap.addSpaceship(spaceship)
  },

  async index(req, res) {
    const { capId } = req.params

    const cap = await Cap.findByPk(capId, {
      include: { association: 'spaceship' }
    })

    return res.json(cap)
  }
}