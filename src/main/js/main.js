// main.js
(function() {

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var FilterableProductTable = require('./component/FilterableProductTable');

ReactDOM.render(<FilterableProductTable />, document.getElementById('content'));

})();
