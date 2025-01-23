import { useCallback, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { CalculatorScreen } from "@/screens/Calculator";

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CalculatorScreen />
    </SafeAreaView>
  );
}