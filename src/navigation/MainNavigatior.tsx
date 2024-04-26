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
import userSlice from '../redux/slices/userSlice';
import { UseSelector, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
const MainStackNavigator = createNativeStackNavigator();
const AuthenticationStackNavigation = createNativeStackNavigator();
const AuthenticatedStackNavigator = createNativeStackNavigator();
const AuthenticatedNavigator=()=>{
  return(
    <AuthenticatedStackNavigator.Navigator >
    <AuthenticatedStackNavigator.Screen name="Question1" component={Question1} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question2" component={Question2} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question3" component={Question3} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question4" component={Question4} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question5" component={Question5} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question6" component={Question6} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question7" component={Question7} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question8" component={Question8} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question9" component={Question9} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question10" component={Question10} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question11" component={Question11} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question12" component={Question12} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question13" component={Question13} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question14" component={Question14} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question15" component={Question15} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question16" component={Question16} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question17" component={Question17} options={{headerShown:false}}/>
    </AuthenticatedStackNavigator.Navigator>
  )
}

const AuthenticationNavigator = () => {
  return (
   <AuthenticationStackNavigation.Navigator> 
    <AuthenticationStackNavigation.Screen name="SignIn" component={SignIn} />
    <AuthenticationStackNavigation.Screen name="SignUp" component={SignUp} />



   </AuthenticationStackNavigation.Navigator>
  )
}
const MainNavigator = () =>{
  const isLogged = useSelector((state:RootState)=>state.user.isLoggedIn);
  return isLogged?<AuthenticatedNavigator/>:<AuthenticationNavigator/>;


}

export default MainNavigator