'use strict';

angular.module('frontEndChallengeApp')
  .factory('users', function ($resource) {

    //create resource for the json file
    return $resource('users.json', null, {
       getAll: {method: 'GET', isArray: true}
    });

  });
