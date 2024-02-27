import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import BootSplash from "react-native-bootsplash"

const App = () => {
  useEffect(() => {
    BootSplash.hide();
  }, []);
  
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App