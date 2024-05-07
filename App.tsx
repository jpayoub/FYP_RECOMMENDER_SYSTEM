import React, {useEffect} from 'react'
import MainNavigator from './src/navigation/MainNavigatior'
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import {store, persistor} from './src/redux/store';
import RNBootSplash from 'react-native-bootsplash';
import { PersistGate } from "redux-persist/integration/react";


const App = () => {

useEffect(() => {
  RNBootSplash.hide();
}, []);

  return (
    <Provider store={store}>

    <NavigationContainer>
    <MainNavigator />
  </NavigationContainer>
  </Provider>
  )
}

export default App;