import { useMemo } from 'react';
import { horizontalScale, verticalScale, moderateScale } from '@/utils/scale';

/**
 * Returns an object with scaling functions memoized.
 * @returns {{hs: horizontalScale, vs: verticalScale, ms: moderateScale}}
 */

export const useScale = () => {
  return useMemo(
    () => ({
      hs: horizontalScale,
      vs: verticalScale,
      ms: moderateScale,
    }),
    []
  );
};