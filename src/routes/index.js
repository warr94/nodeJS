var express = require('express');
var router = express.Router();
var favoriteRouter = require('./favoriteRouter')

router.get('/', function (req, res) {
    res.send('Service Up')
  })

  router.use('/favorites/', favoriteRouter);


module.exports = router;