import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { horizontalScale } from '@/utils/scale'

type Props = {}

const CalculatorScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Box</Text>
      </View>
      <Text>CalculatorScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
      width: horizontalScale(100),
    }
})

export default CalculatorScreen