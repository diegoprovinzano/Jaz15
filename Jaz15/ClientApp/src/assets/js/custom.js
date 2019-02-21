$(document).ready(function () {
  
  var userFeed = new Instafeed({
    get: 'user',
    userId: '3055656053', // 3055656053 1606588171
//    limit: 12,
    resolution: 'standard_resolution', // thumbnail standard_resolution
    accessToken: '3055656053.1677ed0.7227a454f29646aba254dfa5a153eef0', //'1606588171.1677ed0.5d256d0327a648b4b1fe44bcf875f2b2', 
//    filter: function(image) {
//      return image.tags.indexOf('') >= 0;
//    },
    clientId: 'efe628ba517341c6a9b35bd64ad15592',
    sortBy: 'most-recent',
    template: '<div class="col-lg-3 gallery instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img style="width: 200px; height: 200px; object-fit: cover;" src="{{image}}" alt="{{caption}}" /></a></div>'
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
