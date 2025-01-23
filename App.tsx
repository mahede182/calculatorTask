import { useEffect } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import { ThemeProvider } from "@/context/themeContext";
import { CalculatorScreen } from "@/screens/Calculator";

export default function App() {
  useEffect(() => {
    // Lock to portrait
    async function lockOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    }
    
    lockOrientation();
  }, []);
  return (
    <ThemeProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={{ flex: 1 }}>
        <CalculatorScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}