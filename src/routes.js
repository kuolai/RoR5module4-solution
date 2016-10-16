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
    templateUrl: 'src/home.template.html'
  })
  // Categories list page
  // 1. state.resolve gets called first, make sure items.promised
  //    items are a list of categories
  // 2. categoriesController gets called
  // 3. categories..html gets called
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/categories.template.html',
    controller: 'CategoriesController as catCtrl',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
  console.log("(categories.state) <-from home..html ->do 3 things:");  
        return MenuDataService.getAllCategories();
      }]
    }
  })
  // Items page as categories.child view
  // 1. state.resolve gets called first, make sure items.promised
  //    items are a list of menu items
  // 2. itemsController gets called
  // 3. items..html gets called
  .state('items', {
    url: '/items/{shortId}',
    templateUrl: 'src/items.template.html',
    controller: 'ItemsController as itemsCtrl',
	resolve: {
		items: ['$stateParams', 'MenuDataService',
		function ($stateParams, MenuDataService) {
console.log("(items.state) <-from <categoriesList> ->do 3 things with shortId= ", $stateParams.shortId);
console.log("##1 resolve(items.state) getItemsForCategories <-by routes.js.resolve shortId= ", $stateParams.shortId);
			return MenuDataService.getItemsForCategory($stateParams.shortId);
		}]
	}
   });
}
})();