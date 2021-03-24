const createError = require('http-errors')
const {Op} = require('sequelize')
const {validationResult} = require('express-validator');

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

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(422).json({errors: errors.array()});
    }

    const {limit, offset} = request.query
    let vehicle = await Vehicle.findAndCountAll({
      limit: limit || 10,
      offset: offset || 0
    })

    response.json(vehicle)

  } catch (error) {
    next(error)
  }
}

async function getById(request, response, next) {
  try {

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(422).json({errors: errors.array()});
    }

    const {id} = request.params
    const vehicle = await Vehicle.findOne({
      where: {id}
    })

    response.json(vehicle)

  } catch (error) {
    next(error)
  }
}

module.exports = {
  create,
  get,
  getById
};
