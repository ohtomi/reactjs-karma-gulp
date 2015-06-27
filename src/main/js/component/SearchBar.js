// SearchBar.js
(function() {

'use strict';

var React = require('react');

var SearchBar = React.createClass({

  handleChange: function() {
    this.props.onUserInput(
      this.refs.nameInput.getDOMNode().value,
      this.refs.inStockOnlyInput.getDOMNode().checked
    );
  },

  render: function() {
    return (
      <form>
        <input type="text" placeholder="Search..." ref="nameInput" onChange={this.handleChange} />
        <p>
          <label>
          <input type="checkbox" ref="inStockOnlyInput" onChange={this.handleChange} />
          {' '}
          Only show products in stock
          </label>
        </p>
      </form>
    );
  }

});

module.exports = SearchBar;

})();
