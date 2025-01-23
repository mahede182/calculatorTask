import { StyleSheet, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/context/themeContext';
import Button from '@/components/Button';
import { buttons } from '@/constants/buttonData';
import Display from '../Display/DisplayScreen';

const CalculatorScreen = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const [display, setDisplay] = useState('(2495 x 3) + 6615');
  const [result, setResult] = useState('14,100');


  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Button
          label={isDarkMode ? '☀️' : '🌙'}
          type="function"
          onPress={toggleTheme}
        />
      </View>
      <Display
        display={display}
        result={result}
        theme={theme}
      />
      <View style={styles.keypad}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            label={button.label}
            type={button.type}
            onPress={() => {}}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: "center",
  },
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
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'center',
  },
});

export default CalculatorScreen;