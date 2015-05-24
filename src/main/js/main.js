// main.js
(function() {

'use strict';

var React = require('react');
var ProductStore = require('./store/ProductStore');
var FilterableProductTable = require('./component/FilterableProductTable');

React.render(<FilterableProductTable />, document.getElementById('content'));

})();
