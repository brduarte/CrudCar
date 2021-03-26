const {Vehicle} = require('../src/models')
var expect = require('expect.js');

describe('Array', function () {


  describe('Testando o Crud', function () {

    it('create()', async function () {
      vehicle = await Vehicle.create({
        board: "NAG9852",
        chassis: "5665345334",
        renavam: "45379501481",
        brand: "HOVER CUV 2.4 16V 5p Mec.",
        model: "Passat 1.8 Tiptronic",
        year: "2008"
      })
    })

    it('get()', async function () {
      const response = await Vehicle.findAll()
      expect(response).to.be.an('array');
    })

    it('put()', async function () {

      let vehicle = await Vehicle.findOne()

      vehicle.update({
        board: "HED9852",
        chassis: "56534535",
        renavam: "64576545675",
        brand: "2.4 16V 5p Mec.",
        model: "Passat 1.8 Tiptronic",
        year: "2008"
      })

    })

    it('delete()', async function () {
      let vehicle = await Vehicle.findOne()
      vehicle.destroy()
    })

  })
});

