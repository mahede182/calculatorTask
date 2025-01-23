import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => {
  const scale = width / guidelineBaseWidth;
  const newSize = size * scale;
  return Math.round(newSize);
};

const verticalScale = (size: number) => {
  const scale = height / guidelineBaseHeight;
  const newSize = size * scale;
  return Math.round(newSize);
};

const moderateScale = (size: number, factor = 0.5) => {
  const scale = width / guidelineBaseWidth;
  const newSize = size + (scale - 1) * size * factor;
  return Math.round(newSize);
};

export { horizontalScale, verticalScale, moderateScale };