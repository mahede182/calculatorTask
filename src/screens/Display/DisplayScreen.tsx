import { Theme } from '@/theme/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from '@/utils/scale';

interface DisplayProps {
  display: string;
  result: string;
  theme: Theme;
}

const Display: React.FC<DisplayProps> = ({ display, result, theme }) => {
  return (
    <View style={styles.display}>
      <Text style={[styles.expression, { color: theme.secondary }]}>
        {display}
      </Text>
      <Text style={[styles.result, { color: theme.text }]}>
        {result}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: moderateScale(20),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    maxWidth: moderateScale(400),
    alignSelf: 'center',
    width: '100%',
  },
  expression: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(8),
  },
  result: {
    fontSize: moderateScale(40),
    fontWeight: '600',
  },
});

export default Display;