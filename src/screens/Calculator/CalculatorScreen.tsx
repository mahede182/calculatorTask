import { StyleSheet, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/context/themeContext';
import { buttons } from '@/constants/buttonData';
import Display from '../Display/DisplayScreen';
import { moderateScale } from '@/utils/scale';
import ButtonRow from '@/components/ButtonRow';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';
import { calculate } from '@/utils/calculator';

const CalculatorScreen = () => {
  const { theme } = useTheme();
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('0');
  const [isNewCalculation, setIsNewCalculation] = useState(true);

  const handleButtonPress = (label: string) => {
    switch (label) {
      case 'AC':
        setDisplay('');
        setResult('0');
        setIsNewCalculation(true);
        break;

      case '⌫':
        setDisplay((prev) => prev.slice(0, -1));
        break;

      case '=':
        if (display) {
          const calculatedResult = calculate(display);
          setResult(calculatedResult);
          setIsNewCalculation(true);
        }
        break;

      case '()':
        const openCount = (display.match(/\(/g) || []).length;
        const closeCount = (display.match(/\)/g) || []).length;
        setDisplay((prev) => prev + (openCount > closeCount ? ')' : '('));
        break;

      case '%':
        if (display) {
          const value = parseFloat(display) / 100;
          setDisplay(value.toString());
        }
        break;

      default:
        if (isNewCalculation && !isOperator(label)) {
          setDisplay(label);
          setIsNewCalculation(false);
        } else {
          setDisplay((prev) => prev + label);
        }
        break;
    }
  };

  const isOperator = (char: string) => ['+', '-', '×', '÷'].includes(char);

  const buttonRows = [
    buttons.slice(0, 4),
    buttons.slice(4, 8),
    buttons.slice(8, 12),
    buttons.slice(12, 16),
    buttons.slice(16, 20),
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.content, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
        <View style={styles.header}>
          <ThemeToggleButton />
        </View>
        <Display
          display={display}
          result={result}
          theme={theme}
        />
        <View style={styles.keypad}>
          {buttonRows.map((row, index) => (
            <ButtonRow
              key={index}
              buttons={row}
              onPress={handleButtonPress}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    height: moderateScale(60),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(16),
  },
  keypad: {
    padding: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: moderateScale(375),
    alignSelf: 'center',
    marginBottom: moderateScale(20),
  },
});

export default CalculatorScreen;