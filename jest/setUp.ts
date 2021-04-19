import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useRoute: () => ({
    params: {
      name: 'Batman',
    },
  }),
}));

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
