/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier'
  ],
  rules: {
    indent: 0,
    'space-before-function-paren': 0,
    'vue/multi-word-component-names': 'off'
  }
}
