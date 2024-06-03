import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  Image,
} from 'react-native';
import {Formik} from 'formik';

import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {signup, SignUpPayload} from '../redux/slices/userSlice'; // Import the selectError selector
import CustomInput from '../components/atoms/CustomInput';
import CustomButton from '../components/atoms/CustomButton';
import {useNavigation} from '@react-navigation/native';
import logo from '../assets/images/recomai.png';
import {RootState,AppDispatch} from '../redux/store';
const SignUp = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const dispatch: AppDispatch = useDispatch();
  const error = useSelector((state: RootState) => state.user.error);
  console.log(error);
  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const navigateToQuest1 = () => {
    navigation.navigate('Question1');
  };

  const signUpSchema = Yup.object().shape({
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
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('Password')],
      "Your passwords don't match",
    ),
  });
  const handleSignUp = async (values: {email: string; Password: string,confirmPassword: string}) => {
    const payload: SignUpPayload = {
      email: values.email,
      password: values.Password,
      tokenExpiresIn: '30m',
    };
    console.log("handling SignUp");

    // Dispatch the `signup` action with the payload
    dispatch(signup(payload));
  };


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image source={logo} style={[styles.logo, {height: height * 0.2}]} />
        </View>
        <Text style={styles.title}>Create an account</Text>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <Formik
          initialValues={{
            email: '',
            Password: '',
            confirmPassword: '',
          }}
          onSubmit={handleSignUp}
          validationSchema={signUpSchema}>
          {({handleChange, handleSubmit,values, errors, isValid}) => (
            <>
             
              <CustomInput
                placeholder="Email"
                value={values.email}
                setValue={handleChange('email')}
                secureTextEntry={false}
              />
              {errors.email && (
                <Text style={styles.errorText}> {errors.email} </Text>
              )}

              <CustomInput
                placeholder="Password"
                value={values.Password}
                setValue={handleChange('Password')}
                secureTextEntry
              />
              {errors.Password && (
                <Text style={styles.errorText}> {errors.Password} </Text>
              )}

              <CustomInput
                placeholder="Confirm Password"
                value={values.confirmPassword}
                setValue={handleChange('confirmPassword')}
                secureTextEntry
              />
              {errors.confirmPassword && (
                <Text style={styles.errorText}> {errors.confirmPassword} </Text>
              )}

              <CustomButton
                text="Register"
                type={isValid && values.email && values.Password && values.confirmPassword  ? 'PRIMARY' : 'DISABLED'}
                onPress={isValid ? handleSubmit : null}
              />
            </>
          )}
        </Formik>
        <Text style={styles.text}>
          By registering, you confirm that you accept our
          <Text style={styles.link}> Terms of Use </Text>
          and
          <Text style={styles.link}> Privacy Policy </Text>
        </Text>
        <Text style={styles.logintext}>
          Already have an account?
          <Text style={styles.link} onPress={navigateToSignIn}>
            LogIn
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
});

export default SignUp;
