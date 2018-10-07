/* config-overrides.js */
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config) {
  config = injectBabelPlugin('babel-plugin-styled-components', config);
  // do stuff with the webpack config...
  return config;
};
