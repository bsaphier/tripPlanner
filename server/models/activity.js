const db = require('./index');

const Activity = db.define('activity', {
  name: {},
  age_range: {}
});

models.export = {
  Activity
};
