import * as Font from 'expo-font';

export const fonts = {
  AvenirRegular: require('../../assets/fonts/avenirRegular.otf'),
  AvenirMedium: require('../../assets/fonts/avenirMedium.otf'),
  AvenirBold: require('../../assets/fonts/avenirBold.otf'),
};

export const loadFonts = () => Font.loadAsync(fonts);