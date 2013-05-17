var Chaplin = require('chaplin');
var routes = require('routes');

// Application bootstrapper.
var Application = Chaplin.Application.extend({
    initialize: function() {
        // Call the parent constructor.
        Chaplin.Application.prototype.initialize.apply(this, arguments);
    this.initRouter(routes);
    this.initDispatcher();
    this.initComposer();
    this.initLayout();

    // Actually start routing.
    this.startRouting();
        
        if (typeof Object.freeze === 'function') Object.freeze(this)
        
    }
});

module.exports = Application;
