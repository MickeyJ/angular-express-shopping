
var HomeController = function($interval, AppStoreFactory){
  var vm = this;
  
  vm.products = AppStoreFactory.getAllProducts();

  $interval(function(){
    vm.cartQtyTotal = AppStoreFactory.cartQty();
  }, 100);
  
  vm.addToCart = AppStoreFactory.addToCart;
  
  vm.isInStock = function(bool){
    return bool ? 'green' : 'red'
  };
  
  vm.categoryOptions = [
    {value: "", name: "-- Categories --"},
    {value: "hot", name: "Hot"},
    {value: "cold", name: "Cold"},
    {value: "warm", name: "Warm"},
    {value: "lucid", name: "Lucid"},
    {value: "dark", name: "Dark"},
    {value: "awesome", name: "Awesome"},
    {value: "winter", name: "Winter"},
    {value: "summer", name: "Summer"},
    {value: "spring", name: "Spring"},
    {value: "dry", name: "Dry"}
  ];
  
  vm.priceSortOptions = [
    {value: "", name: "-- Sort By Price --"},
    {value: "price", name: "Lowest"},
    {value: "-price", name: "Highest"}
  ];
  
  vm.selectedCategoryOption = vm.categoryOptions[0];
  vm.selectedPriceSort = vm.priceSortOptions[0];
  
};

HomeController.$inject = ['$interval','AppStoreFactory'];
module.exports = HomeController;