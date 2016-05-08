
function searchBarDirective(){
  return{
    restrict: 'E',
    scope: {
      cartQtyTotal: '=',
      search: '=',
      categoryOptions: '=',
      priceSortOptions: '=',
      selectedCategoryOption: '=',
      selectedPriceSort: '='
    },
    template: '@@import _search-bar.html'
  }
}

module.exports = searchBarDirective;
