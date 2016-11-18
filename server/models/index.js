const db = require('./db');
const Activity = require('./activity.js');
const Hotel = require('./hotel.js');
const Place = require('./place.js');
const Restaurant = require('./restaurant.js');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  db,
  Activity,
  Hotel,
  Place,
  Restaurant
};
