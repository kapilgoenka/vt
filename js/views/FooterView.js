define([
  'libs/text!templates/FooterTemplate.html'
], function(FooterTemplate)
{
  return Backbone.View.extend(
  {
    template: Handlebars.compile(FooterTemplate),
    
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