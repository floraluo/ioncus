// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controller', 'starter.servive', 'ngCordova'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('demo', {
    url: '/demo',
    abstract: true,
    templateUrl: 'templates/main-menu.html'
    // views: {
    //   '': {
    //     templateUrl: 'templates/main-menu.html'
    //   },
    //   'menuContent@demo': {
    //     templateUrl: 'templates/tab-home.html',
    //     controller: 'DeomoCtrl'
    //   }
    // }
  })
  .state('demo.tabs',{
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-home.html'
      }
      // 'tabs': {
      //   templateUrl: 'templates/tabs.html'
      // }
    }
    // views: {
    //   'menuContent': {
    //     templateUrl: 'templates/tabs.html',
    //     controller: 'DeomoCtrl'
    //   },
    //   'tab-home': {
    //     templateUrl: 'templates/tab-home.html'
    //   }
    // }
  })
  .state('demo.sheet',{
    url: '/sheet',
    views: {
      'menuContent': {
        templateUrl: 'templates/sheet.html',
        controller: 'SheetCtrl'     
      }
    }
  })
  .state('demo.content',{
    url: '/content',
    views: {
      'menuContent': {
        templateUrl: 'templates/content.html'
      }
    }
  })
  .state('demo.forminput',{
    url: '/forminput',
    views: {
      'menuContent': {
        templateUrl: 'templates/form-input.html'
      }
    }
  })
  .state('demo.gesture',{
    url: '/gesture',
    views: {
      'menuContent': {
        templateUrl: 'templates/gesture.html'
      }
    }
  })
  .state('demo.setting',{
    url: '/setting',
    // cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/setting.html',
        controller: "SettinCtrl"
      }
    }
  })
  .state('demo.personal', {
    url: '/personal',
    views: {
      'menuContent': {
        templateUrl: 'templates/personal.html'
      }
    }
  })
  .state('demo.selectProfession', {
    url: '/selectProfession',
    views: {
      'menuContent': {
        templateUrl: 'templates/select-profession.html',
        controller: "ProfessionCtrl"
      }
    }
  })
  .state('demo.signature', {
    url: '/signature',
    views: {
      'menuContent': {
        templateUrl: 'templates/setting-value.html',
        controller: "SignCtrl"
      }
    }
  })
  .state('demo.nickname', {
    url: '/nickname',
    views: {
      "menuContent": {
        templateUrl: 'templates/setting-value.html',
        controller: 'NicknameCtrl'
      }
    }
  })
  .state("demo.region", {
    url: '/region',
    views: {
      "menuContent": {
        templateUrl: 'templates/choose-region.html',
        controller: 'RegionCtrl'
      }
    }
  })
  .state('demo.province', {
    url: '/region/:province',
    views: {
      "menuContent": {
        templateUrl: 'templates/choose-region.html',
        controller: 'RegionProCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/demo');
});

