// SearchBar-test.js
var assert = require('power-assert');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');
var SearchBar = require('../../../main/js/component/SearchBar');

describe('SearchBar', function() {

  var component;
  var onUserInput;

  beforeEach(function() {
    onUserInput = function(name, inStockOnly) {
    };
    component = ReactTestUtils.renderIntoDocument(<SearchBar onUserInput={onUserInput} />);
  });

  it('returns', function() {
    var nameInput = component.refs.nameInput;
    var inStockOnlyInput = component.refs.inStockOnlyInput;

    assert(
      ReactDOM.findDOMNode(nameInput).textContent
      ===
      ''
    );
    assert(
      ReactDOM.findDOMNode(inStockOnlyInput).checked
      ===
      false
    )
  });

});
