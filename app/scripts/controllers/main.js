'use strict';

angular.module('frontEndChallengeApp')
  .controller('MainCtrl', function ($scope, users, logs) {

    $scope.users = users.getAll();
    $scope.logs = logs.getAll();

    /*
        Once the users and logs scope variables
        are loaded, for each user get its id and
        find the associated logs with that user
    */
    $scope.users.$promise.then(function(userData){
      $scope.logs.$promise.then(function(logData){
          $.each(userData, function(userKey, userVal){
              var revenue = 0;
              var startDate = '';
              var endDate = '';

              //find this users logs for conversions
              var conversionObj = $.grep(logData, function(logKey,logVal){
                  return (logKey.user_id == userVal.id && logKey.type == 'conversion');
              });

              //find this users logs for impressions
              var impressionObj = $.grep(logData, function(logKey,logVal){
                  return (logKey.user_id == userVal.id && logKey.type == 'impression');
              });

              //get all logs of this user, so we can add all the revenue
              var revenueObj = $.grep(logData, function(logKey,logVal){
                  return logKey.user_id == userVal.id;
              });

              //iterate through this users logs and sum up the revenue
              $.each(revenueObj, function(key,val){
                 revenue += val.revenue;
              });

              //sort the conversion data
              conversionObj.sort(function compare(a,b) {
                  if (a.time < b.time)
                      return -1;
                  if (a.time > b.time)
                      return 1;
                  return 0;
              });


              //format date function to convert the timestamp to a MM/DD/YYYY format
              var formatDate = function(date){
                  var day = date.time.split(' ')[0];
                  var splitDate = day.split('-');
                  return splitDate[1]+'/'+splitDate[2]+'/'+splitDate[0];
              };

              //get start and end dates for conversion data
              startDate = formatDate(conversionObj[0]);
              endDate = formatDate(conversionObj[conversionObj.length-1]);

              //add new data to the user object
              $scope.users[userKey].conversions = conversionObj.length;
              $scope.users[userKey].impressions = impressionObj.length;
              $scope.users[userKey].revenue = revenue.toFixed(2);
              $scope.users[userKey].startDate = startDate;
              $scope.users[userKey].endDate = endDate;
          });
      });
    });


  });
