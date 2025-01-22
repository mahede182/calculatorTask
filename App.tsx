import { StyleSheet, View, SafeAreaView } from 'react-native';
import { CalculatorScreen } from '@/screens';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CalculatorScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
