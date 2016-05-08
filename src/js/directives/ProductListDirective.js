
var ProductListDirective = function(){
  return{
    restrict: 'E',
    scope: {
      products: '=',
      isInStock: '=',
      search: '=',
      selectedCategoryOption: '=',
      selectedPriceSort: '=',
      addToCart: '='
    },
    template: '@@import _product-list.html'
  }
};

module.exports = ProductListDirective;