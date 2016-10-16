(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['items'];
  function CategoriesController(items) {
	console.log("##2 CategoriesController <-declared at routes.js");
	console.log("*** categories..html, will call categories.component");
    this.items = items.data;
  };
  
})();