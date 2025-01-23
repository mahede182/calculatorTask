import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useTheme } from "@/context/themeContext";
import { moderateScale } from "@/utils/scale";

export const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme, theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? theme.keypadBackground : "#E8E8E8",
        },
      ]}>
      <View
        style={[
          styles.toggle,
          {
            backgroundColor: theme.primary,
            transform: [{ translateX: isDarkMode ? moderateScale(28) : 0 }],
          },
        ]}>
        <Text style={styles.icon}>{isDarkMode ? "🌙" : "☀️"}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: moderateScale(60),
    height: moderateScale(32),
    borderRadius: moderateScale(16),
    padding: moderateScale(2),
  },
  toggle: {
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: moderateScale(14),
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: moderateScale(16),
    textAlign: "center",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
