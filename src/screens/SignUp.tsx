import { View, Text, ScrollView, TextInput, StyleSheet, Alert, useWindowDimensions, Image } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/atoms/CustomInput';
import CustomButton from '../components/atoms/CustomButton';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/images/recomai.png';
import {Formik, FormikHelpers, FormikValues} from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
  const {height} = useWindowDimensions();
    const navigation = useNavigation();


    // const [userName, setUserName] = useState('');
    // const [email, setEmail] = useState('');
    // const [Password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const onRegisterPressed = () => {
        //Auth.signUp(userName, email, Password);
        
    }

    const navigateToSignIn = () => {
        navigation.navigate("SignIn");
    }
    const navigateToQuest1 = () => {
        navigation.navigate("Question1");
    }

    const signUpSchema = Yup.object().shape({
      userName: Yup.string()
      .min(3, 'Too Short!')
      .required('Name is required').label('Name'),
      email: Yup.string()
      .email('Please enter valid email')
      .required('Email is required')
      .label('Email'),
      Password: Yup.string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required')
      .label('Password'),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref('Password')], "Your passwords doesn't match"),
      });
    

  return (
    
    <View style={Styles.container}>
<ScrollView>
  <View style={Styles.logoContainer}>
<Image source={logo} style={[Styles.logo, {height: height*0.2}]} />
</View>

      <Text style={Styles.title} >Create an account</Text> 

      <Formik 
      initialValues={{userName: '', email: '', Password:'', confirmPassword: ''}} 
      onSubmit={values => console.log(values)} 
      validationSchema={signUpSchema}>
        {({
          handleChange,
          values,
          errors,
          isValid,
        })=> (
          <>
      <CustomInput 
        placeholder="UserName" 
        value={values.userName} 
        setValue={handleChange('userName')} 
        secureTextEntry={false} 
      />
      {errors.userName && (
        <Text style={Styles.errorText}> {errors.userName} </Text>
      )}

      

      <CustomInput 
        placeholder="Email"
        value={values.email}
        setValue={handleChange('email')}
        secureTextEntry={false}
        />
        {errors.email && (
        <Text style={Styles.errorText}> {errors.email} </Text>
      )}

      <CustomInput 
      placeholder="Password" 
      value={values.Password} 
      setValue={handleChange('Password')} 
      secureTextEntry
      />
      {errors.Password && (
        <Text style={Styles.errorText}> {errors.Password} </Text>
      )}

<CustomInput 
      placeholder="Confirm Password" 
      value={values.confirmPassword} 
      setValue={handleChange('confirmPassword')} 
      secureTextEntry
      />
      {errors.confirmPassword && (
        <Text style={Styles.errorText}> {errors.confirmPassword} </Text>
      )}

      <CustomButton 
      text="Register" 
      type={(values.userName && values.email && values.Password && values.confirmPassword && isValid) ? "PRIMARY" : "DISABLED"}
      onPress={(values.userName && values.email && values.Password && values.confirmPassword && isValid) ? navigateToQuest1: null} 
      />


      </>
      )}
    </Formik>

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
 </ScrollView>
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
    },
    logoContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorText: {
      fontSize: 12,
      color: 'red',
    }
});

export default SignUp;