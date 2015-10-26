var Backbone = require('backbone');

var Todo = Backbone.Model.extend({
  defaults : {
    title : '',
    completed : false
  }
});
module.exports = Todo;
