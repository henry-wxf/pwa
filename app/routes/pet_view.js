const express = require('express');
const router = express.Router();

router.get('/pets/:petID', function(req, res) {

  res.render('pet_view', {
    pageTitle: 'View Pet',
    pageID: 'pet_view'
  });

});

module.exports = router;
