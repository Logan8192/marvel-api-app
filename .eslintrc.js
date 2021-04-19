module.exports = {
  root: true,
  env: {
    'jest/globals': true,
  },
  extends: ['@react-native-community', 'plugin:jest/recommended', 'prettier'],
  plugins: ['jest'],
};
