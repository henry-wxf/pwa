const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {

  res.render('pet_list', {
    pageTitle: 'Home',
    pageID: 'pet_list'
  });

});

module.exports = router;
