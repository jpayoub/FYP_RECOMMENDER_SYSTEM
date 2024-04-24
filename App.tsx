import React from 'react'

import MainNavigator from './src/navigation/MainNavigatior'
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
  )
}

export default App;