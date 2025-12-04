/* Imports */
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import pluginVue from 'eslint-plugin-vue';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },

  // ESLint Recommended Rules
  ...compat.extends('eslint:recommended'),

  // Vue Recommended Rules
  ...pluginVue.configs['flat/recommended'],

  // Global Settings (applies to all files unless overridden)
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // Global rules applying to all files
      'no-console': 'error',
      'vue/multi-word-component-names': 'off',
    },
  },

  // Specific overrides for Vue files
  {
    files: ['*.vue'],
    rules: {
      // Vue-specific rules if needed
    }
  },

  // Specific overrides for JS files
  {
    files: ['**/*.js'],
    rules: {
      indent: ['error', 2],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
    }
  }
];