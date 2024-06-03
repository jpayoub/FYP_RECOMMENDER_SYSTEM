import { View, Text, StyleSheet, Image, Alert, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../components/atoms/CustomInput';
import CustomButton from '../components/atoms/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { login,LoginPayload } from '../redux/slices/userSlice';
import logo from '../assets/images/recomai.png';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { AppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
const SignIn = () => {
  const error = useSelector((state: RootState) => state.user.error);

  const {height} = useWindowDimensions();
  const dispatch: AppDispatch = useDispatch();

    const navigation = useNavigation();

    const navigateToSignUp = () => {
        navigation.navigate("SignUp");
    };
   


    const signInSchema = Yup.object().shape({
      email: Yup.string()
      .email('Please enter valid email')
      .required('Email is required')
      .label('Email'),
      Password: Yup.string()
      .matches(/\w*[a-z]\w*/, 'Password must contain a lowercase letter')
      .matches(/\w*[A-Z]\w*/, 'Password must contain an uppercase letter')
      .matches(/\d/, 'Password must have a number')
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required')
      .label('Password'),
      });

    
  return (

    <ScrollView>
    <Formik 
      initialValues={{ email: '', Password:'' }} 
      onSubmit={(values) =>
        {
          const payload: LoginPayload = {
            email: values.email,
            password:values.Password,
          }
          dispatch(login(payload))
        } } 
      validationSchema={signInSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        })=> (
          <>
    <View style={Styles.container}>
      
    <View style={Styles.logoContainer}>
<Image source={logo} style={[Styles.logo, {height: height*0.2}]} />
</View>     

<Text style={Styles.title} >Log In</Text> 
{error && <Text style={Styles.errorText}>{error}</Text>}
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
      secureTextEntry={true}
      />
      {errors.Password && (
        <Text style={Styles.errorText}> {errors.Password} </Text>
      )}

      <CustomButton 
      text="Log In"
      type={(values.email && values.Password && isValid) ? "PRIMARY" : "DISABLED"} 
      onPress={(values.email && values.Password && isValid)? handleSubmit : null} 
      
      />

      <CustomButton 
      text="Forgot Password?" 
      onPress={values.email ? ()=>Alert.alert("Coming Soon...") : null} 
      type={values.email && isValid ? "TERTIARY" : "DISABLED"}
      />

      <Text style={Styles.logintext}>Don't have an account? 
        <Text 
          style={Styles.link} 
          onPress={navigateToSignUp} 
          > Create One </Text> 
      </Text>



    </View>

    </>
      )}
    </Formik>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'blue',
      margin: 10,
      textAlign: 'center',
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
    },
    errorText: {
      fontSize: 12,
      color: 'red',
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },

})

export default SignIn;