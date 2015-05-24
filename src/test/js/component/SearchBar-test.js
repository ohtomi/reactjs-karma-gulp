// SearchBar-test.js
var assert = require('power-assert');
var React = require('react/addons');
var SearchBar = require('../../../main/js/component/SearchBar');

var TestUtils = React.addons.TestUtils;

describe('SearchBar', function() {

  var component;
  var onUserInput;

  beforeEach(function() {
    onUserInput = function(name, inStockOnly) {
    };
    component = TestUtils.renderIntoDocument(<SearchBar onUserInput={onUserInput} />);
  });

  it('returns ', function() {
    var nameInput = component.refs.nameInput;
    var inStockOnlyInput = component.refs.inStockOnlyInput;

    assert(
      React.findDOMNode(nameInput).textContent
      ===
      ''
    );
    assert(
      React.findDOMNode(inStockOnlyInput).checked
      ===
      false
    )
  });

});
