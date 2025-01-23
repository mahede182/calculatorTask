import { SafeAreaView } from "react-native";
import { ThemeProvider } from "@/context/themeContext";
import { CalculatorScreen } from "@/screens/Calculator";

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <CalculatorScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}