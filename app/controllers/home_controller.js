var Chaplin = require('chaplin');  
var HomeView = require('views/home_view');
var HomeModel = require('models/home');        
        
var HomeController = Chaplin.Controller.extend({
  index: function(params) {
    this.model = new HomeModel();
    this.view = new HomeView({model: this.model});
  }
});
  
module.exports = HomeController;