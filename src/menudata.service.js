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
	    console.log("##1 resolve(categories.state) service.getAllCategories.then()");
	    console.log("*** result passed in getAllCategories.then(): ", result);
        // return processed items
        return result;
      });
  };

  service.getItemsForCategory = function (shortId) {
	console.log("*** in service.getItemsForCategory shortId= ", shortId);
  	return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + shortId,
		params: { category: shortId }
	})
  	.then(function(result){
	    console.log("*** result passed in getItemsForCategory.then(): ", result.data);
        // return processed items
        return result.data;
    });
  };
  
};
})();