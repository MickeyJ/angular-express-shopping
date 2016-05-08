

var CartListDirective = function(){
  return{
    restrict: 'E',
    template: '@@import _cart-list.html',
    controllerAs: 'vm',
    controller: 'CartListController'
  }
};

module.exports = CartListDirective;
