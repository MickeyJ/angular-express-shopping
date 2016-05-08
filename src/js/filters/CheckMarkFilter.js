
var CheckMarkFilter = function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
};

module.exports = CheckMarkFilter;
