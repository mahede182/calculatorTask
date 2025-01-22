import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const CalculatorScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>CalculatorScreen</Text>
    </View>
  )
}

export default CalculatorScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red"
    }
})