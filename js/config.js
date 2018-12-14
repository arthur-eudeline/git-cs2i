app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      }
    }
  })

  .state('app.cheatSheet', {
    url: '/cheat-sheet',
    views: {
      'menuContent': {
        templateUrl: 'templates/cheat-sheet.html',
        controller: 'CheatSheetController'
      }
    }
  })

  .state('app.learn', {
    url: '/learn/:pageTemplateName/:sectionName',
    views: {
      'menuContent': {
        templateUrl: 'templates/page.html',
        controller: 'pageController'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');


});
