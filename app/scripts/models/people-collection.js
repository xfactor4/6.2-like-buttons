var Person = require('models/person');

var PeopleCollection = Backbone.Collection.extend({
  model: Person,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/things"
});

module.exports = PeopleCollection;
