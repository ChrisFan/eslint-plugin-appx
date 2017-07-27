//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const preservedMsg = variable => `${variable} 为小程序保留字段，请不要使用`;
const notSupportedMsg = variable => `小程序不支持 ${variable} 变量`;
const restrictedGlobals = {
  self: preservedMsg('self'),
  fetch: preservedMsg('fetch'),
  global: preservedMsg('global'),

  window: notSupportedMsg('window'),
  document: notSupportedMsg('document'),
  location: notSupportedMsg('location'),
  XMLHttpRequest: notSupportedMsg('XMLHttpRequest'),
};

module.exports = {
  meta: {
    docs: {
        description: "disallow preserved global variables for appx",
        category: "Possible Errors",
        recommended: true
    },
    fixable: "code",
    schema: [] // no options
  },
  create: function(context) {
    return {
      "Identifier": function(node) {
        if (restrictedGlobals.hasOwnProperty(node.name)) {
           context.report(node, restrictedGlobals[node.name]);
        }
      }
    };
  }
};