// L20nUtils.js
(function() {

'use strict';

function localize(ctx, id, args) {
  if (!ctx) {
    return '';
  }
  var data = ctx.getSync(id, args);
  if (data === id) {
    return '';
  }
  return data;
}

module.exports = {
  localize: localize
};

})();
