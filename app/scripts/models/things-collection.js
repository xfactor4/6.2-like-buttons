var Thing = require('models/thing');

var ThingsCollection = Backbone.Collection.extend({
  model: Thing,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/things"
});

module.exports = ThingsCollection;
