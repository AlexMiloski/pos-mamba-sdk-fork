const { lineLength } = require('../shared.js');

module.exports = {
  semi: true,
  printWidth: lineLength,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  singleQuote: true,

  // prettier-plugin-svelte
  svelteSortOrder: 'styles-scripts-markup',
  svelteStrictMode: true,
  svelteBracketNewLine: true,
  svelteAllowShorthand: true,
};
