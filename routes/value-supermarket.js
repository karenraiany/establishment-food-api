var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET valueSupermarket listing. */
router.get('/', function(req, res, next){
    model.valueSupermarket.findAll({})
        .then(valueSupermarket => res.json({
            error: false,
            data: valueSupermarket
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

/* GET um valueSupermarket pelo id. */
router.get('/:id', function(req, res, next){
    const value_id = req.params.id;
 
    model.valueSupermarket.findById(value_id)
        .then(value => res.json({
            error: false,
            data: value
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});


/* POST valueSupermarket. */
router.post('/', function(req, res, next) {
  const {
    value,
    supermarketId,
    produtoId,
    data,
    status
  } = req.body;
  model.valueSupermarket.create({
    value: value,
    supermarketId: supermarketId,
    produtoId: produtoId,
    data: data,
    status: status
  })
  .then(valueSupermarket => res.status(201).json({
    error: false,
    data: valueSupermarket,
    message: 'New valueSupermarket has been created.'
  }))
  .catch(error => res.json({
    error: true,
    data: [],
    error: error
  }));
});
 
 
/* update valueSupermarket. */
router.put('/:id', function(req, res, next) {
    const valueSupermarket_id = req.params.id;
 
    const {
        value,
        supermarketId,
        produtoId,
        data,
        status
    } = req.body;
 
    model.valueSupermarket.update({
      value: value,
      supermarketId: supermarketId,
      produtoId: produtoId,
      data: data,
      status: status
    }, {
      where: {
        id: valueSupermarket_id
      }
    })
    .then(valueSupermarket => res.status(201).json({
      error: false,
      message: 'valueSupermarket has been updated.'
    }))
    .catch(error => res.json({
      error: true,
      error: error
    }));
});
 
 
/* delete valueSupermarket. */
router.delete('/:id', function(req, res, next) {
    const valueSupermarket_id = req.params.id;
 
    model.valueSupermarket.destroy({ where: {
      id: valueSupermarket_id
    }})
    .then(value => res.status(201).json({
      error: false,
      message: 'valueSupermarket has been delete.'
    }))
    .catch(error => res.json({
      error: true,
      error: error
    }));
});

module.exports = router;
