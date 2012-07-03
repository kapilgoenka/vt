define([
  'libs/text!templates/HomeTemplate.html'
], function(HomeTemplate)
{
  return Backbone.View.extend(
  {
    template: Handlebars.compile(HomeTemplate),
    
    initialize: function()
    {
      _.bindAll(this, 'render');
    },
    
    render: function()
    {
      this.$el.html(this.template());
      return this;
    }
  });
});