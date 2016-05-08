
var ColorTrueFilter = function() {
  return function(input) {
    return input ? 'green' : 'red';
  };
};

module.exports = ColorTrueFilter;