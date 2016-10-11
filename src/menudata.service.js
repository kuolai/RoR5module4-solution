(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
  	return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      })
  	  .then(function(result){
	    console.log("*****enter getAllCategories.then()");
	    console.log("result passed in getAllCategories.then(): ", result);
        // return processed items
        return result;
      });
  };

  service.getItemsForCategory = function (categoryShortName) {
  	return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
      })
  	  .then(function(result){
	    console.log("*****enter getItemsForCategory.then()");
	    console.log("result passed in getItemsForCategory.then(): ", result);
        // return processed items
        return result;
      });
  };
  
};
})();