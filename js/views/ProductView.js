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
      var data = {
        imgSrc: window.localStorage['imgSrc'],
        related1: 'img/DSC_' + Math.floor(Math.random()*6) + '.jpeg',
        related2: 'img/DSC_' + Math.floor(Math.random()*6) + '.jpeg',
        related3: 'img/DSC_' + Math.floor(Math.random()*6) + '.jpeg'
      };

      this.$el.html(this.template(data));
      return this;
    }
  });
});