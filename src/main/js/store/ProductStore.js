// ProductStore.js
(function() {

'use strict';

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var ActionDispatcher = require('../action/ActionDispatcher');

var products = [];

function addListener(listener) {
  emitter.on('ProductStore', listener);
}

function removeListener(listener) {
  emitter.removeListener('ProductStore', listener);
}

function setProducts(newProducts) {
  products = newProducts.slice(0);
  emitter.emit('ProductStore');
}

function getProducts() {
  return products.slice(0);
}

ActionDispatcher.register(function(action) {
  if (action.type === 'SearchAction') {
    var name = action.payload.name;
    var inStockOnly = action.payload.inStockOnly ? true : false;
    var result = [];

    PRODUCTS.forEach(function(product) {
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

setTimeout(function() {
  setProducts(PRODUCTS);
}, 300);

module.exports = {
  addListener: addListener,
  removeListener: removeListener,
  getProducts: getProducts
};

})();
