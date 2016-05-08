var angular = require('angular'),
    uiRouter = require('angular-ui-router');

var checkMarkFilter = require('./filters/checkMarkFilter'),
    colorTrueFilter = require('./filters/colorTrueFilter'),
    searchBarDirective = require('./directives/searchBarDirective'),
    cartListDirective = require('./directives/cartListDirective'),
    productListDirective = require('./directives/productListDirective'),
    homeController = require('./controllers/homeController'),
    cartListController = require('./controllers/cartListController'),
    appStoreFactory = require('./factories/appStoreFactory'),
    router = require('./router');

angular
  .module('app', ['ui.router'])
  .filter('colortrue', colorTrueFilter)
  .filter('checkmark', checkMarkFilter)
  .factory('appStoreFactory', appStoreFactory)
  .directive('searchBarDirective', searchBarDirective)
  .directive('cartListDirective', cartListDirective)
  .directive('productListDirective', productListDirective)
  .controller('homeController', homeController)
  .controller('cartListController', cartListController)
  .config( router );