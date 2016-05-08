
var SearchBarDirective = function(){
  return{
    restrict: 'E',
    scope: {
      cartQtyTotal: '=',
      searchName: '=',
      categoryOptions: '=',
      selectedCategoryOption: '=',
      priceSortOptions: '=',
      selectedPriceOrder: '='
    },
    template: '@@import _search-bar.html'
  }
};

module.exports = SearchBarDirective;
