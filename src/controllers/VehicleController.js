const createError = require('http-errors')
const {Op} = require('sequelize')


const {Vehicle} = require('../models')


async function create(request, response, next) {
  try {

    const {board, chassis, renavam, brand, model, year} = request.body;

    let vehicle = await Vehicle.findOne({
      where: {
        [Op.or]: {board, chassis, renavam}
      }
    })

    if (vehicle) {
      throw createError(422, `O veículo ${vehicle.board} já está cadastrado na base de dados.`)
    }

    vehicle = await Vehicle.create({
      board,
      chassis,
      renavam,
      brand,
      model,
      year
    })

    response.json(vehicle)

  } catch (err) {
    next(err)
  }

}

async function get(request, response, next) {
  try {

    const {limit, offset} = request.query
    let vehicle = await Vehicle.findAndCountAll({
      limit: limit || 10,
      offset: offset || 0
    })

    response.json(vehicle)

  } catch (err) {
    next(err)
  }
}

module.exports = {
  create,
  get
};
