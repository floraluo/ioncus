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
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom').style('standard');
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
    url: '/tabs',
    views: {
      'menuContent': {
        templateUrl: 'templates/tabs.html'
      }
    }
  })
  .state('demo.tabs.home', {
    url: '/home',
    views: {
      'tabHome': {
        templateUrl: 'templates/tab-home.html'
      }
    }
  })
  // .state('demo.tabs.tabsnd', {
  //   url: '/favorite',
  //   views: {
  //     'tabFavorite': {
  //       templateUrl: 'templates/tab-favorite.html',
  //       controller: 'FovCtrl'
  //     }
  //   }
  // })
  .state('demo.contacts', {
    url: '/contacts',
    views: {
      "menuContent": {
        templateUrl: 'templates/contacts.html',
        controller: 'ContactCtrl'
      }
    }
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
  .state('demo.tabs.setting',{
    url: '/setting',
    // cache: false,
    views: {
      'tabSet': {
        templateUrl: 'templates/setting.html',
        controller: "SettinCtrl"
      }
    }
  })
  .state('demo.tabs.personal', {
    url: '/personal',
    views: {
      'tabSet': {
        templateUrl: 'templates/personal.html'
      }
    }
  })
  .state('demo.tabs.selectProfession', {
    url: '/selectProfession',
    views: {
      'tabSet': {
        templateUrl: 'templates/select-profession.html',
        controller: "ProfessionCtrl"
      }
    }
  })
  .state('demo.tabs.signature', {
    url: '/signature',
    views: {
      'tabSet': {
        templateUrl: 'templates/setting-value.html',
        controller: "SignCtrl"
      }
    }
  })
  .state('demo.tabs.nickname', {
    url: '/nickname',
    views: {
      "tabSet": {
        templateUrl: 'templates/setting-value.html',
        controller: 'NicknameCtrl'
      }
    }
  })
  .state("demo.tabs.region", {
    url: '/region',
    views: {
      "tabSet": {
        templateUrl: 'templates/choose-region.html',
        controller: 'RegionCtrl'
      }
    }
  })
  .state('demo.tabs.province', {
    url: '/region/:province',
    views: {
      "tabSet": {
        templateUrl: 'templates/choose-region.html',
        controller: 'RegionProCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('demo/tabs/home');
});

