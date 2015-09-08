var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      title: 'Products',
      templateUrl: 'partials/products.html',
      controller: 'productsCtrl'
    })
    .when('/tin-tuc', {
      title: 'Tin tức',
      templateUrl: 'partials/tintuc.html'
      // controller: 'tintucCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });;
}]);
    