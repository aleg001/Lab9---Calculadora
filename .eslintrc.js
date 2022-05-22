/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: ['react'],
  rules: {
    semi: [2, 'never'],
    'react/react-in-jsx-scope': 0,
    'linebreak-style': 0,
    'import/extensions': [
      2,
      {
        jsx: 'always',
      },
    ],
    quotes: [2, 'single'],
    'react/jsx-filename-extension': [0],
  },
}
