const router = require('express').Router();
const db = require('../models');
// const Hotel = db.Hotel

router.get('/', function(req, res, next) {

  const hotel = db.Hotel.findAll();
  const restaurant = db.Restaurant.findAll();
  const activity = db.Activity.findAll();

  // res.send('Hello World!');
  Promise.all([hotel, restaurant, activity])
    .then(function(databases) {
      res.render('index', {
        templateHotels: databases[0],
        templateRestaurants: databases[1],
        templateActivities: databases[2]
      });
    })
    .catch(next);
});

module.exports = router;
