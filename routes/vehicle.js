const express = require('express');
const router = express.Router();
const {query, param} = require('express-validator');

const {create, get, getById, update, deleteById} = require('../src/controllers/VehicleController')


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

router.put('/:id', [
    param('id').isNumeric(),
    update
  ]
)

router.delete('/:id', [
    param('id').isNumeric(),
    deleteById
  ]
)

module.exports = router;
