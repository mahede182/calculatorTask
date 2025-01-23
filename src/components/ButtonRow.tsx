import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';
import { moderateScale } from '@/utils/scale';

type ButtonRowProps = {
  buttons: {
    label: string;
    type: 'number' | 'operator' | 'function';
  }[];
  onPress: (label: string) => void;
};

const ButtonRow = ({ buttons, onPress }: ButtonRowProps) => {
  return (
    <View style={styles.row}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          label={button.label}
          type={button.type}
          onPress={() => onPress(button.label)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(4),
  },
});

export default ButtonRow;