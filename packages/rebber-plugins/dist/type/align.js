'use strict';

/* Dependencies. */
var all = require('rebber/dist/all');

/* Expose. */
module.exports = align;

var defaultMacros = {
  leftAligned: function leftAligned(innerText) {
    return '\n\n' + innerText + '\n\n';
  },
  centerAligned: function centerAligned(innerText) {
    return '\n\\begin{center}\n' + innerText + '\n\\end{center}\n';
  },
  rightAligned: function rightAligned(innerText) {
    return '\n\\begin{flushright}\n' + innerText + '\n\\end{flushright}\n';
  },
  defaultType: function defaultType(innerText, type) {
    return '\n\\begin{' + type + '}\n' + innerText + '\n\\end{' + type + '}\n';
  }
};

function align(ctx, node) {
  var macro = ctx[node.type] || defaultMacros[node.type] || defaultMacros.defaultType;
  var innerText = all(ctx, node);
  return macro(innerText, node.type);
}