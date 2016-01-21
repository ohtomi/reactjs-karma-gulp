// ProductStore.js
(function() {

'use strict';

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var request = require('superagent');
var FetchedAction = require('../action/FetchedAction');
var ActionDispatcher = require('../action/ActionDispatcher');

var origin = [];
var products = [];

function addListener(listener) {
  emitter.on('ProductStore', listener);
}

function removeListener(listener) {
  emitter.removeListener('ProductStore', listener);
}

function setOrigin(newProducts) {
  origin = products = newProducts.slice(0);
  emitter.emit('ProductStore');
}

function setProducts(newProducts) {
  products = newProducts.slice(0);
  emitter.emit('ProductStore');
}

function getProducts() {
  if (origin === null || origin.length === 0) {
    request
      .get('/products')
      .end(function(err, res) {
        var json = res.body;
        FetchedAction.update(json);
      });
  }
  return products.slice(0);
}

ActionDispatcher.register(function(action) {
  if (action.type === 'FetchedAction') {
    var fetchedProducts = action.payload.products;
    setOrigin(fetchedProducts);
    return;
  }

  if (action.type === 'SearchAction') {
    var name = action.payload.name;
    var inStockOnly = action.payload.inStockOnly ? true : false;
    var result = [];

    origin.forEach(function(product) {
      if (product.name.indexOf(name) === -1) {
        return;
      }
      if (!product.stocked && inStockOnly) {
        return;
      }
      result.push(product);
    });

    setProducts(result);
    return;
  }
});

module.exports = {
  addListener: addListener,
  removeListener: removeListener,
  getProducts: getProducts
};

})();
