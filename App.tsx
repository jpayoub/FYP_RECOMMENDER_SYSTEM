import React from 'react'

import MainNavigator from './src/navigation/MainNavigatior'
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>

    <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
  </Provider>
  )
}

export default App;