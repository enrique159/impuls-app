module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'indent': ['error', 2],
    'arrow-parens': ['error', 'always'],
    semi: [2, 'never'],
    'vue/no-unused-vars': 'warn',
    'no-var': 'error',
    'no-trailing-spaces': 'error',
    'vue/html-indent': 'error',
    'vue/attribute-hyphenation': 'error',
    'space-before-function-paren': ['error', 'never'],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-setup-props-destructure': 'warn',
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'no-unused-vars': 'warn',
    'vue/no-static-inline-styles': [ 'error', { allowBinding: true } ],
    'comma-dangle': ['error', {
      objects: 'always-multiline',
      arrays: 'always-multiline',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
    'vue/max-attributes-per-line': [1, {
      'singleline': {
        'max': 6,
      },
      'multiline': {
        'max': 1,
      },
    }],
  },
  globals: {
    Vue: 'readonly',
    axios: 'readonly',
    globalError: 'readonly',
    window: 'readonly',
    document: 'readonly',
  },
}
