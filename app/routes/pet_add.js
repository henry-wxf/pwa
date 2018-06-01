const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/add', function(req, res) {

  res.render('pet_add', {
    pageTitle: 'Add Pet',
    pageID: 'pet_add'
  });

});

router.post('/pets', function(req, res) {

  console.log(req.body);

  res.render('pet_list', {
    pageTitle: 'Home',
    pageID: 'pet_list'
  });

});

module.exports = router;
