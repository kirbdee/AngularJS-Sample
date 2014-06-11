'use strict';

angular.module('frontEndChallengeApp')
  .factory('logs', function ($resource) {

    //create resource for the json file
    return $resource('logs.json', null, {
        getAll: {method: 'GET', isArray: true}
    });

});
