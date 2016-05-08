var angular = require('angular');
require('angular-ui-router');

var CheckMarkFilter = require('./filters/CheckMarkFilter');
var ColorTrueFilter = require('./filters/ColorTrueFilter');
var HomeController = require('./controllers/HomeController');
var CartListController = require('./controllers/CartListController');
var CartListDirective = require('./directives/CartListDirective');
var SearchBarDirective = require('./directives/SearchBarDirective');
var ProductListDirective = require('./directives/ProductListDirective');
var AppStoreFactory = require('./factories/AppStoreFactory');
var Router = require('./router');

angular
  .module('app', ['ui.router'])
  .filter('colortrue', ColorTrueFilter)
  .filter('checkmark', CheckMarkFilter)
  .factory( 'AppStoreFactory', AppStoreFactory )
  .controller( 'HomeController', HomeController )
  .controller( 'CartListController', CartListController )
  .directive( 'cartListDirective', CartListDirective)
  .directive( 'searchBarDirective', SearchBarDirective)
  .directive( 'productListDirective', ProductListDirective)
  .config( Router );