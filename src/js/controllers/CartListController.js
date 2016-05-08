
function cartListController($interval, appStoreFactory){
  var vm = this;

  vm.cart = appStoreFactory.getCart();
  vm.addToCart = appStoreFactory.addToCart;
  vm.removeFromCart = appStoreFactory.removeFromCart;
  vm.increaseQty = appStoreFactory.increaseQty;
  vm.decreaseQty = appStoreFactory.decreaseQty;
  
  $interval(function(){
    vm.total = appStoreFactory.cartTotal();
  }, 100);
  
}

cartListController.$inject = ['$interval', 'appStoreFactory'];
module.exports = cartListController;