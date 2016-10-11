(function () {
'use strict';

angular.module('MenuApp').config(RoutesConfig);
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })
  // Categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesController as catCtrl',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  // Items page as categories.child view
  .state('categories.items', {
    url: '/items/{itemId}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'ItemsController as itemsCtrl',
    params: {
      itemId: null
    }
  });
}
})();