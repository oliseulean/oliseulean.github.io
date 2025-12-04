export default {
  customSyntax: 'postcss-scss',
  ignoreFiles: [
    'node_modules/**',
    'dist/**',
  ],
  plugins: [
    'stylelint-scss',
    '@stylistic/stylelint-plugin',
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
  ],
  rules: {
    'at-rule-empty-line-before': null,
    'declaration-empty-line-before': null,
    'comment-empty-line-before': null,
    '@stylistic/indentation': 2,
    'rule-empty-line-before': ['always-multi-line', {
      except: ['first-nested'],
      ignore: ['after-comment'],
    }],
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep'] }],
  },
  overrides: [{
    files: ['**/*.vue'],
    customSyntax: 'postcss-html',
  }],
}