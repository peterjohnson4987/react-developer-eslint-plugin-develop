module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['primer-react'],
  rules: {
    'primer-react/no-deprecated-colors': 'warn'
  }
}
