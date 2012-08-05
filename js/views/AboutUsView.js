define([
  'libs/text!templates/AboutUsTemplate.html'
], function(AboutUsTemplate)
{
  return Backbone.View.extend(
  {
    template: Handlebars.compile(AboutUsTemplate),
    
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