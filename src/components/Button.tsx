import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@/context/themeContext";
import { moderateScale } from "@/utils/scale";
import { Ionicons } from "@expo/vector-icons";
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
        return { color: theme.primary, fontFamily: theme.fonts.heavy };
      case "function":
        return { color: theme.secondary, fontFamily: theme.fonts.heavy};
      default:
        return { color: theme.text, fontFamily: theme.fonts.regular };
    }
  };
  
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.80);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  const renderContent = () => {
    if (label === 'backspace') {
      return (
        <Ionicons 
          name="backspace-outline" 
          size={moderateScale(24)} 
          color={theme.secondary} 
        />
      );
    }
    return (
      <Text 
        style={[
          styles.buttonText,
          getButtonTextStyle()
        ]}>
        {label}
      </Text>
    );
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
        {renderContent()}
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