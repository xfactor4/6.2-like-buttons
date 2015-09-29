var Person = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    name: "[no name specified]",
    favoriteFood: "tacos",
    created_at: Date.now()
  }
});

module.exports = Person;
