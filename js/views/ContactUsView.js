define([
  'libs/text!templates/ContactUsTemplate.html'
], function(ContactUsTemplate)
{
  return Backbone.View.extend(
  {
    template: Handlebars.compile(ContactUsTemplate),
    
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