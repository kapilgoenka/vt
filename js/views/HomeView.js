define([
  'libs/text!templates/HomeTemplate.html'
], function(HomeTemplate)
{
  return Backbone.View.extend(
  {
    template: Handlebars.compile(HomeTemplate),

    className: 'home-view',
    
    initialize: function()
    {
      _.bindAll(this, 'render');
    },
    
    render: function()
    {
      this.$el.html(this.template());

      jQuery('#camera_wrap').each(function()
      {
        var t = jQuery(this);
        var s = 0;
        t.camera({
          height: '470px',
          opacityOnGrid: true,
          thumbnails: false,
          time: 1500,
          transPeriod: 1000
        });
      });

      return this;
    }
  });
});