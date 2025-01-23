import { Theme } from '@/theme/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    padding: 24,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  expression: {
    fontSize: 20,
    marginBottom: 8,
  },
  result: {
    fontSize: 48,
    fontWeight: '600',
  },
});

export default Display;