
function colorTrueFilter() {
  return function(input) {
    return input ? 'green' : 'red';
  };
}

module.exports = colorTrueFilter;