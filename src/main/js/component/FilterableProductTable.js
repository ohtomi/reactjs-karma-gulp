// FilterableProductTable.js
(function() {

'use strict';

var React = require('react');
var ProductStore = require('../store/ProductStore');
var SearchAction = require('../action/SearchAction');
var SearchBar = require('./SearchBar');
var ProductTable = require('./ProductTable');

var FilterableProductTable = React.createClass({

  componentDidMount: function() {
    ProductStore.addListener(this.handleStoreEvent);
  },

  componentWillUnmount: function() {
    ProductStore.removeListener(this.handleStoreEvent);
  },

  handleStoreEvent: function() {
    this.setState({products: ProductStore.getProducts()});
  },

  getInitialState: function() {
    return {
      name: '',
      inStockOnly: false,
      products: ProductStore.getProducts()
    };
  },

  handleUserInput: function(name, inStockOnly) {
    this.setState({
      name: name,
      inStockOnly: inStockOnly
    });
    SearchAction.byName(name, inStockOnly);
  },

  render: function() {
    return (
      <div>
        <h1 data-l10n-id="applicationName"></h1>
        <SearchBar name={this.state.name} inStockOnly={this.state.inStockOnly} onUserInput={this.handleUserInput} />
        <ProductTable products={this.state.products} />
      </div>
    );
  }

});

module.exports = FilterableProductTable;

})();
