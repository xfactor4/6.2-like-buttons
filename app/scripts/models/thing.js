var Thing = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    name: "[no name specified]",
    color: "black",
    created_at: Date.now()
  }
});

module.exports = Thing;
