var angular = require('angular'),
    uiRouter = require('angular-ui-router');

var checkMarkFilter = require('./filters/checkMarkFilter'),
    colorTrueFilter = require('./filters/colorTrueFilter'),
    homeController = require('./controllers/homeController'),
    cartListController = require('./controllers/cartListController'),
    cartListDirective = require('./directives/cartListDirective'),
    searchBarDirective = require('./directives/searchBarDirective'),
    productListDirective = require('./directives/productListDirective'),
    appStoreFactory = require('./factories/appStoreFactory'),
    router = require('./router');

angular
  .module('app', ['ui.router'])
  .filter('colortrue', colorTrueFilter)
  .filter('checkmark', checkMarkFilter)
  .factory('appStoreFactory', appStoreFactory)
  .controller('homeController', homeController)
  .controller('cartListController', cartListController)
  .directive('cartListDirective', cartListDirective)
  .directive('searchBarDirective', searchBarDirective)
  .directive('productListDirective', productListDirective)
  .config( router );