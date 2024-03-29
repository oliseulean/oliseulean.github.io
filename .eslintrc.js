module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  env: {
    node: true,
  },
  rules: {
    'vue/html-quotes': ['error', 'double'],
    'vue/multi-word-component-names': 0,
    'vue/no-extra-parens': 0,
    indent: ['error', 2],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
  },
};
