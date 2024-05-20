import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import profile from '../assets/images/profile1.png';
import CustomButton from '../components/atoms/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { updatePageNb } from '../redux/slices/userSlice';

const Profile = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const major = useSelector((state:RootState)=>state.questions.result);

  const navigateHome = () => {
    navigation.navigate("Home");
  };
  const navigateRecom = () => {
    const updatedPgNb = 1;
            dispatch(updatePageNb(updatedPgNb));
    navigation.navigate("Question1");
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <Image
          source={profile} // Replace with your image source
          style={styles.profileImage}
        />
        <Text style={styles.name}>{auth().currentUser?.email}</Text>
        {major? (
          <>
        <Text style={styles.smallText}>Your Major is:</Text>
        <Text style={styles.major}>{major}</Text>
        <CustomButton
            onPress={navigateRecom}
            text="Retake Test"
          type='PRIMARY' />
          <CustomButton
            onPress={navigateHome}
            text="Go back Home"
          type='PRIMARY' />
          </>) : (
            <>
            <Text style={styles.smallText}>Take the test to see your major</Text>
            <CustomButton
              onPress={navigateRecom}
              text="Take Test"
              type='PRIMARY' />
              <CustomButton
              onPress={navigateHome}
              text="Go back Home"
              type='PRIMARY' />
              </>
          ) }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperHalf: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  major: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 16,
    marginBottom: 5,
  },
  link: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Profile;
