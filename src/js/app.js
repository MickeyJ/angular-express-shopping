var angular = require('angular');
require('angular-ui-router');

var checkMark = require('./filters/filters');
var HomeController = require('./controllers/HomeController');
var CartListController = require('./controllers/CartListController');
var CartListDirective = require('./directives/CartListDirective');
var SearchBarDirective = require('./directives/SearchBarDirective');
var ProductListDirective = require('./directives/ProductListDirective');
var AppStoreFactory = require('./factories/AppStoreFactory');
var Router = require('./router');

angular
  .module('app', ['ui.router', 'checkMark'])
  .factory( 'AppStoreFactory', AppStoreFactory )
  .controller( 'HomeController', HomeController )
  .controller( 'CartListController', CartListController )
  .directive( 'cartListDirective', CartListDirective)
  .directive( 'searchBarDirective', SearchBarDirective)
  .directive( 'productListDirective', ProductListDirective)
  .config( Router );