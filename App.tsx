import { useEffect, useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import { ThemeProvider } from "@/context/themeContext";
import { CalculatorScreen } from "@/screens/Calculator";
import { loadFonts } from "@/constants/fonts";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Promise.all([
          ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_UP
          ),
          loadFonts()
        ]);
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      }
    }
    
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  
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