const express = require('express');
const router = express.Router();

const {create,get} = require('../src/controllers/VehicleController')


router.post('/', create);
router.get('/',get)

module.exports = router;
