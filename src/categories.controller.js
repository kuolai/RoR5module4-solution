(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['items'];
  function CategoriesController(items) {
	console.log("entering CategoriesController");
    this.items = items.data;
  };
  
})();