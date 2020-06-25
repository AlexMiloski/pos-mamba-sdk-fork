const merge = require('webpack-merge');
const { lineLength } = require('../shared.js');
const { additionalGlobalsEslint } = require('../helpers/clientEnvironment.js');

const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  plugins: ['svelte3'],
  env: {
    es6: true,
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
  },
  globals: merge(additionalGlobalsEslint, {
    __APP_ENV__: true,
    __NODE_ENV__: true,
    __BROWSER__: true,
    __POS__: true,
    __PROD__: true,
    __TEST__: true,
    __DEV__: true,
    __DEBUG_LVL__: true,
    __SIMULATOR__: true,
    __APP_MANIFEST__: true,
  }),
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'import/no-cycle': 'off',

    // ! Code
    /** Allow to use new for side effects */
    'no-new': 'off', // disallow dangling underscores in identifiers

    /** Disallow 'console.log' on production */
    'no-console': IS_PROD
      ? ['warn', { allow: ['info', 'warn', 'error'] }]
      : 'off',

    /** Allow implicit return */
    'consistent-return': 'off',

    /** Allow ++ -- operators */
    'no-plusplus': 'off',

    /** Allow to reassign method parameters */
    'no-param-reassign': 'off',

    /** Allow nested ? ternary : expressions ? ... : ...  */
    'no-nested-ternary': 'off',

    /** Allow class methods to not use 'this' */
    'class-methods-use-this': 'off',

    // ! Style

    /** Allow __variables__ with underscores */
    'no-underscore-dangle': 'off',

    /** Allow both LF and CRLF line endings */
    'linebreak-style': 'off',

    /** Max line length */
    'max-len': [
      'warn',
      lineLength,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: true,
      },
    ],
  },
};
