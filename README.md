# RoR5module4-solution
solution to module 4 assignment of coursera RoR 5th course SPA with AngularJS

Second approach: Do categories first, leave items details later.

[Background]: 
Original approach is to do assignment all in once and got lost with too many errors.
New approach is to break the assignment into two parts, categories part and items part.
Original approach started by following assignment instruction and jumped directly into coding.
New approach will do a plan and try to make some sense out of it. E.g. why there is no app.js needed? 

Categories part shall be small and covers:
* two views, home and categories
* 1 artifact per file rule, hence understand the usage of modules and routes.js, and get familiar not to use app.js
* directory structure looks like a root with: 
** index.html
** /css
** /lib
** /src (data module) data.module.js menudata.service.js
**      (menuapp module) menuapp.module.js categories.component.js categories.controller.js routes.js
*** /templates home.template.html categories.template.html

[Bug01 (fixed)]:
symptom: home.template.html shows nothing
error: In index.html, routes.js was placed before menuapp.module.js
solution: move menuapp.module.js up
what might cause the error: menuapp depends on ui.router and thought routes.js = ui.router

[Confusion 02]:
confusion: both routes.js and ctegories.component.js can invoke categories.template.html,
  which way is the right way? Do I need to write both ways?
  // In routes.js: Categories list page
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
  // In categories.component.js
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/templates/categories.template.html',
    controller: CategoriesComponentController,
    bindings: { items: '<' }
  }
  // In categories.controller.js
  function CategoriesController(items) {
    this.items = items.data;
  };
  // In categories.template.html
  <a ui-sref="home">Home</a> &lt; <span>List</span>

<ul>
<li ng-repeat="item in catCtrl.items" 
	ui-sref="categories.items({catId: item.short_name})"
    <h4>{{item.name}} {{item.short_name}} </h4>
    <p>
      {{item.special_instructions}}
    </p>
</li>
</ul>
	 <ui-view></ui-view>
  
  
