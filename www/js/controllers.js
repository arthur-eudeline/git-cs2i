app.controller('AppCtrl', function($scope, $rootScope, content) {
  content.getPagesStructure();
});

app.controller('HomeController', function($scope) {
  $scope.viewTitle = "Accueil";
});

app.controller('CheatSheetController', function($scope, $http) {
  $scope.viewTitle = "Cheat Sheet";

  if (typeof $scope.content === "undefined") {
    $scope.$broadcast('loading.start');
    $http({
      method: "GET",
      url: window.location.origin + "/data/commands.json"
    }).then(
      function( response ) {
        $scope.content = response.data;
      },

      function( error ){
        console.error(error);
      }
    ).finally(function(){
      $scope.$broadcast('loading.end');
    });
  }
});

app.controller('pageController', function($scope, $rootScope, $filter, $stateParams, content){
  let pageLoading = function(){
    if ( $stateParams.pageTemplateName !== "" ){
      $scope.viewTitle = "";
      content.getPageContent( $stateParams.pageTemplateName ).then(
        function( response ){
          $scope.content = response.data;
        },
        function( error ){
          console.error(error);
        }
      );
    } else {
      $scope.viewTitle = "Apprendre Git";
      content.getPageStructure('learn', $scope);
    }
  };

  if( !$rootScope.pageStructure ){
    content.getPagesStructure().finally( function(){
      pageLoading();
    });
  } else {
    pageLoading();
  }
});

app.service('content', function($rootScope, $filter, $http){
  var self = this;

  this.getPagesStructure = function(){
    return $http({
      method: "GET",
      url: window.location.origin + "/data/page-structure.json"
    }).then(
      function( response ) {
        if (response.data.length > 0) {
          response.data.forEach( function( element, index ) {
            response.data[index].index = index;
          });
          $rootScope.pageStructure = response.data;
          $rootScope.subPages = response.data[0].subPages;
          console.log("RootScope pageStructure : ", $rootScope.pageStructure);
        }
      },

      function( error ){
        console.error(error);
      }
    );
  };

  this.getPageStructure = function( pageId, $passedScope ){
    if ( pageId ){
      if ( $rootScope.pageStructure && pageId ){
        var pageStructure = $filter('filter')($rootScope.pageStructure, { 'pageId': pageId })[0];
        if (typeof pageStructure.subPages !== "undefined" && pageStructure.subPages.length > 0) {
          pageStructure.subPages.forEach( function( element, index ) {
            pageStructure.subPages[index].index = index;
          });
          if($passedScope){
            $passedScope.currentPageStructure = pageStructure;
          }
          return pageStructure;
        }
        return null;
      } else {
        self.getPagesStructure().finally( function(){
          self.getPageStructure( pageId );
        });
      }
    }
  };

  this.getPageContent = function( pageId ){
    if ( pageId ){
      return $http({
        method: "GET",
        url: window.location.origin + "/data/learn/"+ pageId +".md"
      });
    }
  }

});
