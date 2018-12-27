$(document).ready(function () {
  
  console.log('Hi');
  var userFeed = new Instafeed({
    get: 'user',
    userId: '1606588171', // 3055656053 1606588171
    limit: 12,
    resolution: 'thumbnail',
    accessToken: '1606588171.1677ed0.5d256d0327a648b4b1fe44bcf875f2b2',
    filter: function(image) {
      return image.tags.indexOf('asado') >= 0;
    },
    clientId: 'efe628ba517341c6a9b35bd64ad15592',
    sortBy: 'most-recent',
    template: '<div class="gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
  });

  userFeed.run();
});
