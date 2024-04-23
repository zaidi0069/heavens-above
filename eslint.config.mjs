// Change eslint.config.mjs to eslint.config.js

// eslint.config.js
const globals = require('globals');
const pluginJs = require('@eslint/js');

module.exports = {
  files: ['**/*.js'],
  languageOptions: { sourceType: 'commonjs' },
  globals: globals.browser,
  plugins: ['js'],
  extends: ['plugin:js/recommended'],
};
