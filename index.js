(async () => {
  const Planet = require('./models/Planet')
  
  // Cria dados

  // const newPlanet = await Planet.create({
  //   name: "Venus",
  //   position: 5,
  // })

  // Consulta dados

  // const seePlanets = await Planet.findAll({
  //   where: {
  //     name:"Terra"
  //   }
  // })

  // Atualiza dados
  
  const updatePlanets = await Planet.findByPk(2)
  
  updatePlanets.name = 'Vênus'

  await updatePlanets.save()

  console.log(updatePlanets)

})();