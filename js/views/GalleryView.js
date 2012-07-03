define([
  'libs/text!templates/GalleryTemplate.html'
], function(GalleryTemplate)
{
  return Backbone.View.extend(
  {
    template: Handlebars.compile(GalleryTemplate),

    initialize: function()
    {
      _.bindAll(this, 'render');
    },

    render: function()
    {
      this.$el.html(this.template());

      this.$('.thumbnail > img').click(function()
      {
        window.localStorage['imgSrc'] = $(this).attr('src');
        document.location.href='#product';
      });

      return this;
    }
  });
});