(async () => {
  const Planet = require('./models/Planet')
  
  // const newPlanet = await Planet.create({
  //   name: "Venus",
  //   position: 5,
  // })

  const seePlanets = await Planet.findAll({
    where: {
      name:"Terra"
    }
  })

  console.log(seePlanets)

})();