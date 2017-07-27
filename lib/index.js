const requireIndex = require('requireindex');

module.exports = {
  rules: requireIndex(__dirname + '/rules'),
  environments: {
    appx: {
      globals: {
        'App': true,
        'Page': true,
        'getApp': true,
        'abridge': true,
        'my': true
      }
    }
  },
}