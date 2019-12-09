var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET produto listing. */
router.get('/', function(req, res, next){
    model.produto.findAll({})
        .then(produto => res.json({
            error: false,
            data: produto
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

/* GET um produto pelo id. */
router.get('/:id', function(req, res, next){
    const prod_id = req.params.id;
 
    model.produto.findById(prod_id)
        .then(prod => res.json({
            error: false,
            data: prod
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});


/* POST produto. */
router.post('/', function(req, res, next) {
    const {
        nome,
        status
    } = req.body;
    model.produto.create({
            nome: nome,
            status: status
        })
        .then(produto => res.status(201).json({
            error: false,
            data: produto,
            message: 'New produto has been created.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
 
/* update produto. */
router.put('/:id', function(req, res, next) {
    const produto_id = req.params.id;
 
    const {
        nome,
        status
    } = req.body;
 
    model.produto.update({
      nome: nome,
      status: status
    }, {
      where: {
        id: produto_id
      }
    })
    .then(produto => res.status(201).json({
      error: false,
      message: 'produto has been updated.'
    }))
    .catch(error => res.json({
      error: true,
      error: error
    }));
});
 
 
/* delete produto. */
router.delete('/:id', function(req, res, next) {
    const produto_id = req.params.id;
 
    model.produto.destroy({ where: {
      id: produto_id
    }})
    .then(prod => res.status(201).json({
      error: false,
      message: 'produto has been delete.'
    }))
    .catch(error => res.json({
      error: true,
      error: error
    }));
});

module.exports = router;
