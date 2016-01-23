// SearchBar.js
(function() {

'use strict';

var React = require('react');

var SearchBar = React.createClass({

  handleChange: function() {
    this.props.onUserInput(
      this.refs.nameInput.value,
      this.refs.inStockOnlyInput.checked
    );
  },

  handleSelectJa: function() {
    this.props.onUserSelect('ja');
  },

  handleSelectEn: function() {
    this.props.onUserSelect('en-US');
  },

  render: function() {
    return (
      <form>
        <p>
          Select language:
          {' '}
          <a href="#" onClick={this.handleSelectJa}>Japanese</a>
          {' '}
          <a href="#" onClick={this.handleSelectEn}>English</a>
        </p>
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
