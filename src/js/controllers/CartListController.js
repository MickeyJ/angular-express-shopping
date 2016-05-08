var CartListController = function($interval, AppStoreFactory){
  var vm = this;

  vm.cart = AppStoreFactory.getCart();
  vm.addToCart = AppStoreFactory.addToCart;
  vm.removeFromCart = AppStoreFactory.removeFromCart;
  vm.increaseQty = AppStoreFactory.increaseQty;
  vm.decreaseQty = AppStoreFactory.decreaseQty;

  $interval(function(){
    vm.total = AppStoreFactory.cartTotal();
  }, 100);
  
};

CartListController.$inject = ['$interval', 'AppStoreFactory'];
module.exports = CartListController;