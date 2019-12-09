var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET supermarket listing. */
router.get('/', function(req, res, next){
    model.supermarket.findAll({})
        .then(supermarket => res.json({
            error: false,
            data: supermarket
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

/* GET um supermarket pelo id. */
router.get('/:id', function(req, res, next){
    const sup_id = req.params.id;
 
    model.supermarket.findById(sup_id)
        .then(sup => res.json({
            error: false,
            data: sup
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});


/* POST supermarket. */
router.post('/', function(req, res, next) {
    const {
        nome,
        status
    } = req.body;
    model.supermarket.create({
            nome: nome,
            status: status
        })
        .then(supermarket => res.status(201).json({
            error: false,
            data: supermarket,
            message: 'New supermarket has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
 
/* update supermarket. */
router.put('/:id', function(req, res, next) {
    const supermarket_id = req.params.id;
 
    const {
        nome,
        status
    } = req.body;
 
    model.supermarket.update({
      nome: nome,
      status: status
    }, {
      where: {
        id: supermarket_id
      }
    })
    .then(supermarket => res.status(201).json({
      error: false,
      message: 'supermarket has been updated.'
    }))
    .catch(error => res.json({
      error: true,
      error: error
    }));
});
 
 
/* delete supermarket. */
router.delete('/:id', function(req, res, next) {
    const supermarket_id = req.params.id;
 
    model.supermarket.destroy({ where: {
      id: supermarket_id
    }})
    .then(sup => res.status(201).json({
      error: false,
      message: 'supermarket has been delete.'
    }))
    .catch(error => res.json({
      error: true,
      error: error
    }));
});

module.exports = router;
