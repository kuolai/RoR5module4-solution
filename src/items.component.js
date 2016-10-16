(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'src/itemslist.template.html',
  controller: ItemsComponentController,
  bindings: {
    items: '<'
  }
});

ItemsComponentController.$inject = ['$rootScope']
function ItemsComponentController($rootScope) {
  var $ctrl = this;

  console.log("##3 ItemsComponentController, from items..html");
  console.log("*** calls itemslist..html");
  $ctrl.$onInit = function () {
  };

  $ctrl.$doCheck = function () {
      var promises = [];
  };
}

})();