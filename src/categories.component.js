(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/categorieslist.template.html',
  controller: CategoriesComponentController,
  bindings: {    items: '<'  }
});

CategoriesComponentController.$inject = ['$rootScope']
function CategoriesComponentController($rootScope) {
  var $ctrl = this;
  var cancellers = [];

  console.log("##3 CategoriesComponentController, from categories..html");
  console.log("*** calls categorieslist..html and gets {shortId: item.short_name} after a selection click");
  $ctrl.$onInit = function () {
    var cancel = $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){
      console.log('**categories state change started');
    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      console.log("**categories state changed successful");
    });

    cancel = $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      console.log("**categories state transition error: ", error);
    });
    cancellers.push(cancel);
  };

  $ctrl.$onDestroy = function () {
    cancellers.forEach(function (item) {
      item();
    });
  };
}
})();