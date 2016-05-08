
function checkMarkFilter() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
}

module.exports = checkMarkFilter;
