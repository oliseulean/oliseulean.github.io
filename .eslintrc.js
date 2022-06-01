module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  env: {
    node: true,
  },
  rules: {
    'vue/html-quotes': ['error', 'double'],
    'vue/multi-word-component-names': 0,
  },
};
