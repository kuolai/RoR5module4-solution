(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
	var itemsCtrl = this;  
	console.log("##2 itemsController, by routes.js");
    itemsCtrl.menuItems = items.menu_items;
    itemsCtrl.category = items.category;
  };

})();