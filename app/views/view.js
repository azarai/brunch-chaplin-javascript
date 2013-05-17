require('lib/view_helper')
var Chaplin = require('chaplin');

// Base class for all views
module.exports = Chaplin.View.extend({  
    getTemplateFunction: function() {
      return this.template;
    },
    template: function(){}
})
