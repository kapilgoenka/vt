define([
  'libs/text!templates/ProductTemplate.html'
], function(ProductTemplate)
{
  return Backbone.View.extend(
  {
    template: Handlebars.compile(ProductTemplate),

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