//
//  app.js
//  VelocityTrendz
//
//  Created by Kapil Goenka on 06/02/2012
//  Copyright 2011. All rights reserved.
//

define([
  'views/HeaderView',
  'views/FooterView',
  'views/HomeView',
  'views/GalleryView',
  'views/ProductView',
  'views/ContactUsView',
  'views/AboutUsView'
], function(HeaderView, FooterView, HomeView, GalleryView, ProductView, ContactUsView, AboutUsView)
{
  var Router = Backbone.Router.extend(
  {
    applicationDidFinishLaunching: function()
    {
      $('#scrollable').scrollspy();

      this.headerView = new HeaderView({el: $('#header')});
      this.headerView.render();

      this.footerView = new FooterView({el: $('.footer')});
      this.footerView.render();

      /*this.contactUsView = new ContactUsView();
      $('body').append(this.contactUsView.render().el);

      this.aboutUsView = new AboutUsView();
      $('body').append(this.aboutUsView.render().el);*/
    },

    routes:
    {
      '': 'gallery_men',
      'men': 'gallery_men',
      'about': 'about',
      'product': 'product_page'
    },

    index: function()
    {
      this.homeView = new HomeView({el: $('#content')});
      this.homeView.render();
      this.headerView.selectItem(0);
    },

    gallery_men: function()
    {
      this.galleryView = new GalleryView({el: $('#content')});
      this.galleryView.render();
      this.headerView.selectItem(0);
    },

    about: function()
    {
      this.aboutUsView = new AboutUsView({el: $('#content')});
      this.aboutUsView.render();
      this.headerView.selectItem(1);
    },

    product_page: function()
    {
      this.productView = new ProductView({el: $('#content')});
      this.productView.render();
    }
  });

  return {
    initialize: function()
    {
      window.App = new Router();
      App.applicationDidFinishLaunching();
      Backbone.history.start();
    }
  };
});