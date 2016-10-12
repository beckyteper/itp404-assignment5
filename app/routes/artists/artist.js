import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    //console.log(params);

    var artistID = params.artist_id;
    var url = 'http://itp-api.herokuapp.com/api/artists/' + artistID + '/songs';

    var promise = $.ajax({
      type: 'get',
      url: url
    });

    console.log(promise);

    return promise;
  }
});
