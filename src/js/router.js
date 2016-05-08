
function router($stateProvider, $urlRouterProvider, $locationProvider){

  $stateProvider
    .state('home', {
      url: '/',
      scope: true,
      template: '@@import _home.html',
      controllerAs: 'vm',
      controller: 'homeController'
    })
    .state('cart', {
      url: '/cart',
      template: '@@import _cart.html'
    });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
}

router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
module.exports = router;
