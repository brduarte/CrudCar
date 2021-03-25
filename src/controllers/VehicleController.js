const createError = require('http-errors')
const {Op} = require('sequelize')
const {validationResult} = require('express-validator');

const {Vehicle} = require('../models')

async function create(request, response, next) {
  try {
    const {board, chassis, renavam, brand, model, year} = request.body

    await checkVehicleExists(board, chassis, renavam)

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

async function update(request, response, next) {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(422).json({errors: errors.array()});
    }

    const {board, chassis, renavam, brand, model, year} = request.body;
    const {id} = request.params

    let vehicle = await Vehicle.findOne({
      where: {id}
    })

    if (!vehicle) {
      throw createError(404, `Veículo não encontrado na base de dados.`)
    }

    vehicle.update({
      board,
      chassis,
      renavam,
      brand,
      model,
      year
    })

    response.json(vehicle)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

async function deleteById(request, response, next) {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(422).json({errors: errors.array()});
    }

    const {id} = request.params
    const vehicle = await Vehicle.findOne({
      where: {id}
    })

    if (!vehicle) {
      throw createError(404, `Veículo não encontrado na base de dados.`)
    }

    await vehicle.destroy()

    response.json(vehicle)
  } catch (error) {
    next(error)
  }
}

async function checkVehicleExists(board, chassis, renavam) {
  let vehicle = await Vehicle.findOne({
    where: {
      [Op.or]: {board, chassis, renavam}
    }
  })
  if (vehicle) {
    throw createError(422, `O veículo ${vehicle.board} já está cadastrado na base de dados.`)
  }
}

module.exports = {
  create,
  get,
  getById,
  update,
  deleteById
};

