//
//  main.js
//  VelocityTrendz
//
//  Created by Kapil Goenka on 06/02/2012
//  Copyright 2011. All rights reserved.
//

require.config({
  paths: {
    jQuery: 'libs/jquery-1.7.2',
    Underscore: 'libs/underscore-1.3.3',
    Backbone: 'libs/backbone-0.9.2',
    MomentJS: 'libs/moment-1.6.2',
    LessJS: 'libs/less-1.3.0',
    BootStrap: 'libs/bootstrap-2.0.4',
    CloudZoom: 'libs/cloud-zoom.1.0.2',
    Handlebars: 'libs/handlebars-1.0.0.beta.6',
    jQueryEasing: 'libs/jquery.easing.1.3'
  }
});

require(['jQuery', 'Underscore', 'Handlebars', 'MomentJS', 'LessJS'], function()
{
  require(['Backbone', 'BootStrap', 'CloudZoom'], function()
  {
    require(['app'], function(App)
    {
      App.initialize();
    });
  });
});