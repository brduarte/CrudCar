const express = require('express');
const router = express.Router();
const {query,param} = require('express-validator');

const {create, get, getById} = require('../src/controllers/VehicleController')


router.post('/', create);
router.get('/', [
    query('offset').isNumeric(),
    query('limit').isNumeric(),
    get
  ]
)

router.get('/:id', [
    param('id').isNumeric(),
    getById
  ]
)

module.exports = router;
