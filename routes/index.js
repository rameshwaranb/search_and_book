var express = require('express');
var router = express.Router();
var Promise = require("bluebird");

var Hall = Promise.promisifyAll(require('../models/hall'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getHalls', function(req, res, next) {
  let rec = getRecords().then((result)=>{
    res.send({ halls: result });
  });
});

let getRecords = () => {
  return Hall.find()
  .then(function(results){
    console.log(results);
    return results;
  });
}

module.exports = router;
