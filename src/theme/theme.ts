export const lightTheme = {
  background: '#F7F8FB',
  keypadBackground: '#FFFFFF',
  text: '#000000',
  primary: '#FF5A5A',
  secondary: '#A0A0A0',
  border: '#E8E8E8',
  shadow: 'rgba(0, 0, 0, 0.05)',
  fonts: {
    regular: 'AvenirRegular',
    medium: 'AvenirMedium',
    heavy: 'AvenirBold'
  }
};

export const darkTheme = {
  background: '#17171C',
  keypadBackground: '#2D2D2D',
  text: '#FFFFFF',
  primary: '#FF5A5A',
  secondary: '#A0A0A0',
  border: '#2D2D2D',
  shadow: 'rgba(0, 0, 0, 0.2)',
  fonts: {
    regular: 'AvenirRegular',
    medium: 'AvenirMedium',
    bold: 'AvenirBold'
  }
};

export type Theme = typeof lightTheme;