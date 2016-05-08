
var SearchBarDirective = function(){
  return{
    restrict: 'E',
    scope: {
      cartQtyTotal: '=',
      search: '=',
      categoryOptions: '=',
      priceSortOptions: '=',
      selectedCategoryOption: '=',
      selectedPriceOrder: '='
    },
    template: '@@import _search-bar.html'
  }
};

module.exports = SearchBarDirective;
