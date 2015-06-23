// FetchedAction.js
(function() {

'use strict';

var ActionDispatcher = require('./ActionDispatcher');

function update(products) {
  var action = {
    type: 'FetchedAction',
    payload: {
      products: products
    }
  };
  ActionDispatcher.dispatch(action);
}

module.exports = {
  update: update
};

})();
