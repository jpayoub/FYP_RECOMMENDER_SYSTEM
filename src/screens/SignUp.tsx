import { View, Text, TextInput, StyleSheet, Alert, useWindowDimensions, Image } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/atoms/CustomInput';
import CustomButton from '../components/atoms/CustomButton';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/images/recomai.png';


const SignUp = () => {
  const {height} = useWindowDimensions();
    const navigation = useNavigation();


    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const onRegisterPressed = () => {
        //Auth.signUp(userName, email, Password);
        
    }

    const navigateToSignIn = () => {
        navigation.navigate("SignIn");
    }
    const navigateToQuest1 = () => {
        navigation.navigate("Question1");
    }
    

  return (
    <View style={Styles.container}>

<Image source={logo} style={[Styles.logo, {height: height*0.2}]} />


      <Text style={Styles.title} >Create an account</Text> 

      <CustomInput 
        placeholder="UserName" 
        value={userName} 
        setValue={setUserName} 
        secureTextEntry={false} 
      />
      

      <CustomInput 
        placeholder="Email"
        value={email}
        setValue={setEmail}
        secureTextEntry={false}
        />

      <CustomInput 
      placeholder="Password" 
      value={Password} 
      setValue={setPassword} 
      secureTextEntry
      />

<CustomInput 
      placeholder="Confirm Password" 
      value={confirmPassword} 
      setValue={setConfirmPassword} 
      secureTextEntry
      />

      <CustomButton 
      text="Register" 
      type="PRIMARY"
      onPress={navigateToQuest1} 
      />

      <Text style={Styles.text}>By registering, you confirm that you accept our 
        <Text 
          style={Styles.link}  
          > Terms of Use
        </Text> and 

        <Text 
        style={Styles.link}
        > Privacy Policy
        </Text>
      </Text>
      <Text style={Styles.logintext}>Already have an account? 
        <Text 
          style={Styles.link} 
          onPress={navigateToSignIn} 
          > LogIn </Text> 
      </Text>

    </View>
  )
}

const Styles = StyleSheet.create({
    container: {
      alignItems: 'center',
        padding: 15,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'blue',
      margin: 10,
      textAlign: 'center',
    },
    text: {
      color: 'grey',
      marginVertical: 10,

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
      marginBottom: 5,
      borderRadius: 20,
    }
});

export default SignUp;