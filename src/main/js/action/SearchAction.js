// SearchAction.js
(function() {

'use strict';

var ActionDispatcher = require('./ActionDispatcher');

function byName(name, inStockOnly) {
  var action = {
    type: 'SearchAction',
    payload: {
      name: name,
      inStockOnly: inStockOnly
    }
  };
  ActionDispatcher.dispatch(action);
}

module.exports = {
  byName: byName
};

})();
