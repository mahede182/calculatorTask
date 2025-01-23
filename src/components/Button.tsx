import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@/context/themeContext";
import { moderateScale } from "@/utils/scale";
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring 
} from "react-native-reanimated";

type ButtonProps = {
  label: string;
  onPress: () => void;
  type?: "number" | "operator" | "function";
};

const Button = ({ label, onPress, type = "number" }: ButtonProps) => {
  const { theme } = useTheme();
  const scale = useSharedValue(1);

  const getButtonTextStyle = () => {
    switch (type) {
      case "operator":
        return { color: theme.primary };
      case "function":
        return { color: theme.secondary };
      default:
        return { color: theme.text };
    }
  };
  
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };
  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      activeOpacity={1}>
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            backgroundColor: theme.keypadBackground,
            shadowColor: theme.shadow,
          },
          animatedStyle,
        ]}>
        <Text 
          style={[
            styles.buttonText,
            getButtonTextStyle(),
            { fontFamily: theme.fonts.medium }
          ]}>
          {label}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: moderateScale(75),
    height: moderateScale(75),
    borderRadius: moderateScale(16),
    justifyContent: "center",
    alignItems: "center",
    margin: moderateScale(8),
    elevation: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(0,0,0,0.1)",
    shadowOffset: {
      width: 0,
      height: moderateScale(4),
    },
    shadowOpacity: 1,
    shadowRadius: moderateScale(4),
  },
  buttonText: {
    fontSize: moderateScale(28),
    fontWeight: "500",
  },
});

export default Button;