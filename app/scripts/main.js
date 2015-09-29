var ThingsCollection = require('models/things-collection');

$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`
  $('#container').append(JST.application());

  var things = new ThingsCollection();
  things.fetch();

  things.on('add', function(thing){
    console.log(thing.get('name'));
  });
});
