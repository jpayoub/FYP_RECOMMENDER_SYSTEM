import { View, Text, StyleSheet, Image, Alert, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/atoms/CustomInput';
import CustomButton from '../components/atoms/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/userSlice';
import logo from '../assets/images/recomai.png';
const SignIn = () => {

  const {height} = useWindowDimensions();
  const dispatch = useDispatch()

    const navigation = useNavigation();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        //Auth.signIn(email, password);
    }
    const navigateToSignUp = () => {
        navigation.navigate("SignUp");
    };
    const navigateToQuest1 = () => {
      dispatch(login())
      
        //navigation.navigate("Question1");
    };  
    
  return (
    <View style={Styles.container}>
      
        <Image source={logo} style={[Styles.logo, {height: height*0.2}]} />
      
      <CustomInput 
      placeholder="Email" 
      value={email} 
      setValue={setEmail} 
      secureTextEntry={false} 
      />

      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry={true}
      />

      <CustomButton 
      text="Log In" 
      onPress={navigateToQuest1} 
      />

      <CustomButton 
      text="Forgot Password?" 
      onPress={()=>Alert.alert("Coming Soon...")} 
      type="TERTIARY"
      />

      <Text style={Styles.logintext}>Don't have an account? 
        <Text 
          style={Styles.link} 
          onPress={navigateToSignUp} 
          > Create One </Text> 
      </Text>



    </View>
  )
}

const Styles = StyleSheet.create({
    container: {
      alignItems: 'center',
        padding: 15,
    },
    link: {
      color: 'blue',
    },
    logintext: {
      textAlign: 'center',
    },
    logo: {
      width: '70%',
      maxWidth: 300,
      maxHeight: 200,
      marginBottom: 35,
      borderRadius: 20,
    }
})

export default SignIn;