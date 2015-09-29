var ThingsCollection = require('models/things-collection');

$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`
  $('#container').append(JST.application());

  var things = new ThingsCollection();
  things.fetch();
  things.on('add', renderThing);
});

function renderThing(thing) {
  // $('.js-people').append(JST.thing(thing.toJSON()));
  var contextObj = thing.toJSON();
  var html = JST.thing(contextObj);
  $('.js-people').append(html);
}
