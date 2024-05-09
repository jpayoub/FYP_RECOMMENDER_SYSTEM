import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Question1 from '../screens/Question1';
import Question2 from '../screens/Question2';
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
import Question18 from '../screens/Question18';
import { RootState } from '../redux/store';

import Home from '../screens/Home';
import ShowGrades from '../screens/ShowGrades';
import Result from '../screens/Result';
import News from '../screens/News';
import Profile from '../screens/Profile';
import PostDetails from '../screens/PostDetails';
import { useSelector } from 'react-redux';
const AuthenticationStackNavigation = createNativeStackNavigator();
const AuthenticatedStackNavigator = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const AuthenticatedNavigator=()=>{
  return(
    <AuthenticatedStackNavigator.Navigator >
    <AuthenticatedStackNavigator.Screen name="Home" component={Home} options={{headerShown:false}}/>
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
    <AuthenticatedStackNavigator.Screen name="Question18" component={Question18} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="ShowGrades" component={ShowGrades} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Result" component={Result} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="News" component={News} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
    <AuthenticatedStackNavigator.Screen name="PostDetails" component={PostDetails} options={{headerShown:false}}/>
    </AuthenticatedStackNavigator.Navigator>
  )
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ShowGrades" component={ShowGrades}/>
      <Drawer.Screen name="Result" component={Result} />
    </Drawer.Navigator>
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
  const isLogged = useSelector((state:RootState)=>state.user.accessToken);
  return isLogged?<AuthenticatedNavigator/>:<AuthenticationNavigator/>;


}

export default MainNavigator