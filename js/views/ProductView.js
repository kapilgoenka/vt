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

      var cloudZoomElement = document.getElementsByClassName('cloud-zoom')[0];
      cloudZoomElement.innerHTML = '<img src=' + window.localStorage['imgSrc'] + ' width=556px />';
      cloudZoomElement.href = window.localStorage['imgSrc'];

      $('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();

      return this;
    }
  });
});