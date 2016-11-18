const db = require('./index');

const Place = db.define('place', {
  address: {},
  city: {},
  state: {},
  phone: {},
  location: {}
});

models.export = {
  Place
};
