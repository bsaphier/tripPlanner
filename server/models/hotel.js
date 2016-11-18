const db = require('./index');

const Hotel = db.define('hotel', {
  name: {},
  num_stars: {},
  amenities: {}
});

models.export = {
  Hotel
};
