// ProductRow.js
(function() {

'use strict';

var React = require('react');

var ProductRow = React.createClass({

  render: function() {
    var name;
    if (this.props.product.stocked) {
      name = this.props.product.name;
    } else {
      name = (
        <span style={{color: 'white', backgroundColor: 'red'}}>
          {this.props.product.name}
        </span>
      );
    }
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }

});

module.exports = ProductRow;

})();
