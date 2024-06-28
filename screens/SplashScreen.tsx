import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SplashScreen = () => {
  return (
    <View>
      <Text style={styles.text}>
        Hi SplashScreen</Text>
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center'
  }
})