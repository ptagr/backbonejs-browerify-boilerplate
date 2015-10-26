var Backbone = require('backbone');
var Todo = require('../models/todo')
Backbone.$ = $;


var Application = function() {
  this.initialize();
};

Application.prototype.initialize = function() {

  // We create two DOM elements representing buttons
  // which could easily be containers or something else
  var button1 = $('<button></button>');
  var button2 = $('<button></button>');

  // Define a new view
  var View = Backbone.View.extend({
        events: {
          click: function(e) {
            console.log(view.el === e.target);
          }
        }
      });

  // Create a new instance of the view, applying it
  // to button1
  var view = new View({el: button1});

  button1.trigger('click');

  // Apply the view to button2 using setElement
  view.setElement(button2);

  button1.trigger('click');
  button2.trigger('click'); // returns true

};

module.exports = Application;
