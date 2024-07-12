module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    // make sure it's always the last config
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts', '.vue'],
      },
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': ['error', { html: { void: 'always' } }],
    'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
    'vue/v-if-else-key': 2,
    'vue/enforce-style-attribute': ['error', { allow: ['scoped'] }],
  },
}
