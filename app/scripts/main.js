var PeopleCollection = require('models/people-collection');

$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`
  $('#container').append(JST.application());

  var people = new PeopleCollection();
  people.fetch();
  people.on('add', renderPerson);
});

function renderPerson(person) {
  // $('.js-people').append(JST.person(person.toJSON()));
  var contextObj = person.toJSON();
  var html = JST.person(contextObj);
  $('.js-people').append(html);
}
