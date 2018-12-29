$(document).ready(function () {
  
  var userFeed = new Instafeed({
    get: 'user',
    userId: '1606588171', // 3055656053 1606588171
    limit: 12,
    resolution: 'standard_resolution', // thumbnail standard_resolution
    accessToken: '1606588171.1677ed0.5d256d0327a648b4b1fe44bcf875f2b2',
//    filter: function(image) {
//      return image.tags.indexOf('') >= 0;
//    },
    clientId: 'efe628ba517341c6a9b35bd64ad15592',
    sortBy: 'most-recent',
    template: '<div class="instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img style="width: 100px" src="{{image}}" alt="{{caption}}" /></a></div>'
  });

  userFeed.run();

  $('.gallery').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
        enabled: true
    }
  });
});
