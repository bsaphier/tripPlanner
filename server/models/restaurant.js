const db = require('./index');

const Restaurant = db.define('restaurant', {
  name: {},
  cuisine: {},
  price: {}
});

models.export = {
  Restaurant
};
