import { StyleSheet } from 'react-native';
import { useTheme } from '@/context/themeContext';
import { Theme } from '@/theme/theme';

export const useThemed = <T extends ReturnType<typeof StyleSheet.create>>(
  styleFactory: (theme: Theme) => T
) => {
  const { theme } = useTheme();
  return styleFactory(theme);
};