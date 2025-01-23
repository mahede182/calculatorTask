import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '@/context/themeContext';

type ButtonProps = {
  label: string;
  onPress: () => void;
  type?: 'number' | 'operator' | 'function';
};

const Button = ({ label, onPress, type = 'number' }: ButtonProps) => {
  const { theme } = useTheme();

  const getButtonStyle = () => {
    switch (type) {
      case 'operator':
        return { color: theme.primary };
      case 'function':
        return { color: theme.secondary };
      default:
        return { color: theme.text };
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: theme.keypadBackground,
          shadowColor: theme.shadow,
        },
      ]}
      onPress={onPress}>
      <Text style={[styles.buttonText, getButtonStyle()]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 72,
    height: 72,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    fontSize: 32,
    fontWeight: '500',
  },
});

export default Button;