// L20nStore.js
(function() {

'use strict';

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var ActionDispatcher = require('../action/ActionDispatcher');

var context;

function addListener(listener) {
  emitter.on('L20nStore', listener);
}

function removeListener(listener) {
  emitter.removeListener('L20nStore', listener);
}

function setContext(newContext) {
  context = newContext;
  emitter.emit('L20nStore');
}

function getContext() {
  return context;
}

function changeLocale(newLocale) {
  var ctx = L20n.getContext();
  ctx.linkResource('/locales/' + newLocale + '.l20n');
  ctx.requestLocales();
  ctx.ready(function() {
    setContext(ctx);
  });
}

ActionDispatcher.register(function(action) {
  if (action.type === 'L20nAction') {
    var locale = action.payload.locale;
    changeLocale(locale);
  }
});

module.exports = {
  addListener: addListener,
  removeListener: removeListener,
  getContext: getContext
};

})();
