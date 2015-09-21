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
  $stateProvider.state('demo',{
    url: '/demo',
    abstract: true,
    templateUrl: 'templates/main-menu.html',
    controller: 'DeomoCtrl'
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
  });
  $urlRouterProvider.otherwise('/demo/sheet');
})
.controller("starterCtrl",function ($scope ,$ionicActionSheet, $ionicBackdrop, $timeout) {
  $scope.tasks=[
    { title: 'aaa'},
    { title: 'bbb'},
    { title: 'ccc'}
  ];
  //Show a backdrop for one second
  $scope.action = function() {
    $ionicBackdrop.retain();
    $timeout(function() {
      $ionicBackdrop.release();
    }, 1000);
  };
  $scope.testfun = function(data){
    console.log(data);
  };
  $scope.show = function(data){
    $ionicActionSheet.show({
      buttons: [
        { text: '<b>Share</b> This' },
        { text: 'Move' },
        { text: 'sssssss' }
      ],
      cancelText: 'Cancel',
      destructiveText: 'Delete',
      // titleText: 'Modify your album',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index){
        console.log(index);
        return false;
      },
      destructiveButtonClicked: function() {
        console.log(this);
        return true;
      }
    })
  }
});

