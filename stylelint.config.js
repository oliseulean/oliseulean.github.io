module.exports = {
  customSyntax: 'postcss-scss',
  extends: [
    'stylelint-config-standard',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'function-no-unknown': null,
    'string-quotes': 'single',
    'import-notation': null,
  },
  overrides: [{
    files: ['**/*.vue'],
    customSyntax: 'postcss-html',
  }],
}