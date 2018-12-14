// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.directive('loadingSpinner', function(){
  return {
    template : '<div class="spinner-loader" ng-show="show"><ion-spinner icon="{{ icon }}"></ion-spinner></div>',
    // template : 'Oui',
    restrict : 'E',
    scope : {
      "icon" : '@',
      "showByDefault" : "@"
    },

    controller : function ($scope) {

      if (!$scope.icon){
        $scope.icon = "android";
      }

      if (!$scope.showByDefault){
        $scope.showByDefault = false;
      }

      $scope.show = $scope.showByDefault;
      console.log( $scope.show );
      $scope.$on("loading.start", function(){
        console.log("loading start");
        $scope.show = true;
      });

      $scope.$on("loading.end", function(){
        console.log("loading end");
        $scope.show = false;
      });
    }
  }
});

app.filter('Markdown', function(){
	return function(text) {
    return marked(text);
  };
});
