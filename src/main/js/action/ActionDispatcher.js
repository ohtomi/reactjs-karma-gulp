// ActionDispatcher.js
(function() {

'use strict';

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

function register(listener) {
  emitter.on('ActionDispatcher', listener);
}

function dispatch(action) {
  emitter.emit('ActionDispatcher', action);
}

module.exports = {
  register: register,
  dispatch: dispatch
};

})();
