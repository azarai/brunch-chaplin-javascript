var View     = require('./view')
  , template = require('./templates/home')

module.exports = View.extend({
    id: 'home-view',
    autoRender: true,
    container: 'body',
    template: template
})
