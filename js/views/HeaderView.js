define([
  'libs/text!templates/HeaderTemplate.html'
], function(HeaderTemplate)
{
  return Backbone.View.extend(
  {
    template: Handlebars.compile(HeaderTemplate),
    
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