// L20nAction.js
(function() {

'use strict';

var ActionDispatcher = require('./ActionDispatcher');

function changeTo(locale) {
  var action = {
    type: 'L20nAction',
    payload: {
      locale: locale
    }
  };
  ActionDispatcher.dispatch(action);
}

module.exports = {
  changeTo: changeTo
};

})();
