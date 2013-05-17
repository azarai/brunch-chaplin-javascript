var Model = require('./model'); 

var HomeModel = Model.extend({
  defaults: {
    message: 'Hello World!'
  }
});
  
module.exports = HomeModel;