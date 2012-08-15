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
      var self = this;

      var data = {
        imgSrc: window.localStorage['imgSrc'],
        related1: 'img/DSC_' + Math.floor(Math.random()*6) + '.jpeg',
        related2: 'img/DSC_' + Math.floor(Math.random()*6) + '.jpeg',
        related3: 'img/DSC_' + Math.floor(Math.random()*6) + '.jpeg'
      };

      this.$el.html(this.template(data));
      //this.$el.addClass('product-view');
      
      this.$('.thumbnail > img').click(function()
      {
        window.localStorage['imgSrc'] = $(this).attr('src');
        self.render();
      });

      var cloudZoomElement = document.getElementsByClassName('cloud-zoom')[0];
      var selectedImg = window.localStorage['imgSrc'];
      selectedImg = selectedImg.replace('.jpeg', '');
      selectedImg = selectedImg.replace('img/', '');
      selectedImg = 'img/old/' + selectedImg + '.jpeg';
      console.log(selectedImg);
      cloudZoomElement.innerHTML = '<img src=' + selectedImg + ' width=556px />';
      cloudZoomElement.href = selectedImg;

      $('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();

      return this;
    }
  });
});