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
    },

    selectItem: function(index)
    {
      // clear out existing selection
      this.$('#header_menu>li').css({
        'border-bottom': 'none'
      });

      // select the header at the given index
      this.$('#header_menu>li:nth-child(' + (index+1) + ')').css({
        'border-bottom': '4px solid darkgrey'
      });
    }
  });
});