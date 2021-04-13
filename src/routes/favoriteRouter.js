var express = require('express');
var favoriteServices = require('../services/favoritesService');
var router = express.Router();

router.get('/', function (req, res) {

    favoriteServices.findAll().then(response =>{
        res.status(200).json(response)
    })
});

router.post('/:dishId', function (req, res) {
    // console.log(req)
    favoriteServices.create(req.body).then(response =>{
        res.status(200).json(response)
    })
});

router.put('/:dishId', function (req, res) {

    favoriteServices.FindAndUpdate(req.params).then(response =>{
        res.status(200).json(response)
    })
});

router.delete('/:dishId', function (req, res) {

    favoriteServices.FindAndDelete(req.params).then(response =>{
        res.status(200).json(response)
    })
});

module.exports = router;