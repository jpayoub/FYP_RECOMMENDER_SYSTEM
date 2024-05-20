import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Questions from '../screens/Questions';
import Question18 from '../screens/Question18';
import { RootState } from '../redux/store';

import Home from '../screens/Home';
import Result from '../screens/Result';
import Profile from '../screens/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '../redux/slices/userSlice';
import auth from '@react-native-firebase/auth';
const AuthenticationStackNavigation = createNativeStackNavigator();
const AuthenticatedStackNavigator = createNativeStackNavigator();
const AuthenticatedNavigator=()=>{
  return(
    <AuthenticatedStackNavigator.Navigator >
    <AuthenticatedStackNavigator.Screen name="Home" component={Home} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Question1" component={Questions} options={{headerShown:false}}/>
   
    <AuthenticatedStackNavigator.Screen name="Question18" component={Question18} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="ShowGrades" component={Result} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
    </AuthenticatedStackNavigator.Navigator>
  )
}



const AuthenticationNavigator = () => {
  return (
   <AuthenticationStackNavigation.Navigator> 
    <AuthenticationStackNavigation.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
    <AuthenticationStackNavigation.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
   </AuthenticationStackNavigation.Navigator>
  )
}




const MainNavigator = () =>{
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        dispatch(loginSuccess({ accessToken: token }));
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const isLogged = useSelector((state:RootState)=>state.user.accessToken);
  return isLogged?<AuthenticatedNavigator/>:<AuthenticationNavigator/>;


}

export default MainNavigator