import { Theme } from "@/theme/theme";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { moderateScale } from "@/utils/scale";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";

interface DisplayProps {
  display: string;
  result: string;
  theme: Theme;
}

const Display: React.FC<DisplayProps> = ({ display, result, theme }) => {
  const expressionOpacity = useSharedValue(1);
  const resultOpacity = useSharedValue(1);
  const expressionTranslateY = useSharedValue(0);
  const resultTranslateY = useSharedValue(0);

  //sytle for expression
  useEffect(() => {
    expressionOpacity.value = 0;
    expressionTranslateY.value = -10;
    expressionOpacity.value = withTiming(1, { duration: 300 });
    expressionTranslateY.value = withSpring(0, {
      damping: 15,
      stiffness: 150,
    });
  }, [display]);

  //style for total
  useEffect(() => {
    resultOpacity.value = 0;
    resultTranslateY.value = 10;
    resultOpacity.value = withTiming(1, { duration: 300 });
    resultTranslateY.value = withSpring(0, {
      damping: 15,
      stiffness: 150,
    });
  }, [result]);

  const expressionAnimatedStyle = useAnimatedStyle(() => ({
    opacity: expressionOpacity.value,
    transform: [{ translateY: expressionTranslateY.value }],
  }));

  const resultAnimatedStyle = useAnimatedStyle(() => ({
    opacity: resultOpacity.value,
    transform: [{ translateY: resultTranslateY.value }],
  }));

  return (
    <View style={styles.display}>
      <Animated.Text
        style={[
          styles.expression,
          { fontFamily: theme.fonts.medium, color: theme.secondary },
          expressionAnimatedStyle,
        ]}
        numberOfLines={2}
        adjustsFontSizeToFit>
        {display}
      </Animated.Text>
      <Animated.Text
        style={[
          styles.result,
          { fontFamily: theme.fonts.medium, color: theme.text },
          resultAnimatedStyle,
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {result}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: moderateScale(20),
    justifyContent: "flex-end",
    alignItems: "flex-end",
    maxWidth: moderateScale(400),
    alignSelf: "center",
    width: "100%",
  },
  expression: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(8),
  },
  result: {
    fontSize: moderateScale(40),
    fontWeight: "600",
  },
});

export default Display;