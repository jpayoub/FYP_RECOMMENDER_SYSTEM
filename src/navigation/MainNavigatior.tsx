import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Question1 from '../screens/Question1';
import Question2 from '../screens/Question2';
import CustomProgressBar from '../components/atoms/CustomProgressBar';
import Question3 from '../screens/Question3';
import Question4 from '../screens/Question4';
import Question5 from '../screens/Question5';
import Question6 from '../screens/Question6';
import Question7 from '../screens/Question7';
import Question8 from '../screens/Question8';
import Question9 from '../screens/Question9';
import Question10 from '../screens/Question10';
import Question11 from '../screens/Question11';
import Question12 from '../screens/Question12';
import Question13 from '../screens/Question13';
import Question14 from '../screens/Question14';
import Question15 from '../screens/Question15';
import Question16 from '../screens/Question16';
import Question17 from '../screens/Question17';


const MainStackNavigator = createNativeStackNavigator();


const MainNavigator = () => {
  return (
   <MainStackNavigator.Navigator> 
    <MainStackNavigator.Screen name="SignIn" component={SignIn} />
    <MainStackNavigator.Screen name="SignUp" component={SignUp} />
    <MainStackNavigator.Screen name="Question1" component={Question1} options={{headerTitle: '', headerBackground: () => ( <CustomProgressBar progress={0.05882353} /> ),}}/>
    <MainStackNavigator.Screen name="Question2" component={Question2} options={{headerTitle: '',headerBackground: () => ( <CustomProgressBar progress={0.11764706} /> ),}}/>
    <MainStackNavigator.Screen name="Question3" component={Question3} options={{headerBackground: () => ( <CustomProgressBar progress={0.5} /> ),}}/>
    <MainStackNavigator.Screen name="Question4" component={Question4} options={{headerBackground: () => ( <CustomProgressBar progress={0.5} /> ),}}/>
    <MainStackNavigator.Screen name="Question5" component={Question5} options={{headerBackground: () => ( <CustomProgressBar progress={0.5} /> ),}}/>
    <MainStackNavigator.Screen name="Question6" component={Question6} options={{headerBackground: () => ( <CustomProgressBar progress={0.5} /> ),}}/>
    <MainStackNavigator.Screen name="Question7" component={Question7} options={{headerBackground: () => ( <CustomProgressBar progress={0.5} /> ),}}/>
    <MainStackNavigator.Screen name="Question8" component={Question8} options={{headerBackground: () => ( <CustomProgressBar progress={0.5} /> ),}}/>
    <MainStackNavigator.Screen name="Question9" component={Question9} options={{headerBackground: () => ( <CustomProgressBar progress={0.5} /> ),}}/>
    <MainStackNavigator.Screen name="Question10" component={Question10} options={{headerBackground: () => ( <CustomProgressBar progress={0.5} /> ),}}/>
    <MainStackNavigator.Screen name="Question11" component={Question11} options={{headerBackground: () => ( <CustomProgressBar progress={0.5} /> ),}}/>
    <MainStackNavigator.Screen name="Question12" component={Question12} options={{headerBackground: () => ( <CustomProgressBar progress={0.5} /> ),}}/>
    <MainStackNavigator.Screen name="Question13" component={Question13} options={{headerBackground: () => ( <CustomProgressBar progress={0.5} /> ),}}/>
    <MainStackNavigator.Screen name="Question14" component={Question14} options={{headerBackground: () => ( <CustomProgressBar progress={0.5} /> ),}}/>
    <MainStackNavigator.Screen name="Question15" component={Question15} options={{headerBackground: () => ( <CustomProgressBar progress={0.5} /> ),}}/>
    <MainStackNavigator.Screen name="Question16" component={Question16} options={{headerBackground: () => ( <CustomProgressBar progress={0.5} /> ),}}/>
    <MainStackNavigator.Screen name="Question17" component={Question17} options={{headerBackground: () => ( <CustomProgressBar progress={0.5} /> ),}}/>


   </MainStackNavigator.Navigator>
  )
}

export default MainNavigator