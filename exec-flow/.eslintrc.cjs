// .eslintrc.cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  // Add this section for test files
  overrides: [
    {
      files: ['**/*.test.jsx', '**/*.test.js', '**/*.spec.jsx', '**/*.spec.js'],
      env: {
        'vitest/globals': true, // Enable Vitest globals
      },
      plugins: ['vitest'],
      rules: {
        // You can add test-specific rules here
      },
    },
  ],
};