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
    'at-rule-empty-line-before': null,
    'declaration-empty-line-before': null,
    'selector-max-empty-lines': [1],
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep'] }],
  },
  overrides: [{
    files: ['**/*.vue'],
    customSyntax: 'postcss-html',
  }],
}