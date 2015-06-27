// FilterableProductTable.js
(function() {

'use strict';

var React = require('react');
var L20nStore = require('../store/L20nStore');
var L20nAction = require('../action/L20nAction');
var ProductStore = require('../store/ProductStore');
var SearchAction = require('../action/SearchAction');
var SearchBar = require('./SearchBar');
var ProductTable = require('./ProductTable');

var FilterableProductTable = React.createClass({

  componentDidMount: function() {
    L20nStore.addListener(this.handleL20nEvent);
    L20nAction.changeTo('ja');
    ProductStore.addListener(this.handleStoreEvent);
  },

  componentWillUnmount: function() {
    L20nStore.removeListener(this.handleL20nEvent);
    ProductStore.removeListener(this.handleStoreEvent);
  },

  handleL20nEvent: function() {
    this.setState({l20n: L20nStore.getContext()});
  },

  handleStoreEvent: function() {
    this.setState({products: ProductStore.getProducts()});
  },

  getInitialState: function() {
    return {
      l20n: L20nStore.getContext(),
      name: '',
      inStockOnly: false,
      products: ProductStore.getProducts()
    };
  },

  handleUserSelect: function(locale) {
    L20nAction.changeTo(locale);
  },

  handleUserInput: function(name, inStockOnly) {
    this.setState({
      name: name,
      inStockOnly: inStockOnly
    });
    SearchAction.byName(name, inStockOnly);
  },

  render: function() {
    var applicationName = '';
    if (!!this.state.l20n) {
      applicationName = this.state.l20n.getSync('applicationName');
    }

    return (
      <div>
        <h1>{applicationName}</h1>
        <SearchBar name={this.state.name} inStockOnly={this.state.inStockOnly} onUserInput={this.handleUserInput} onUserSelect={this.handleUserSelect} />
        <ProductTable products={this.state.products} />
      </div>
    );
  }

});

module.exports = FilterableProductTable;

})();
