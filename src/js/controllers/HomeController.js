
function homeController($interval, appStoreFactory){
  var vm = this;

  vm.products = appStoreFactory.getAllProducts();
  vm.addToCart = appStoreFactory.addToCart;

  $interval(function(){
    vm.cartQtyTotal = appStoreFactory.cartQty();
  }, 100);

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
  
}

homeController.$inject = ['$interval','appStoreFactory'];
module.exports = homeController;
