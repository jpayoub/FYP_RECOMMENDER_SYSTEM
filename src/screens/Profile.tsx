import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import profile from '../assets/images/profile1.png';
import CustomButton from '../components/atoms/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { updatePageNb } from '../redux/slices/userSlice';
import { updateResult } from '../redux/slices/questionSlice';

const Profile = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [major, setMajor] = useState('');
  const [specificMajor, setSpecificMajor] = useState('');
  const [loading, setLoading] = useState(true);

  const userEmail = auth().currentUser?.email;


  const navigateHome = () => {
    navigation.navigate("Home");
  };


  useEffect(() => {
    const fetchUserData = async () => {
      if (userEmail) {
        try {
          const userDoc = await firestore().collection('Users').doc(userEmail).get();
          if (userDoc.exists) {
            setMajor(userDoc.data().major);
            setSpecificMajor(userDoc.data().specific_major);
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching document: ', error);
        } finally {
          setLoading(false);
        }
      }
    };
    

    fetchUserData();
  }, [userEmail]);



  const navigateRecom = () => {
    const updatedPgNb = 1;
            dispatch(updatePageNb(updatedPgNb));
            dispatch(updateResult(null));
    navigation.navigate("Question1");
  };

if (loading) {
  return <ActivityIndicator size="large" color="#0000ff" />;

}

  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <Image
          source={profile} 
          style={styles.profileImage}
        />
        <Text style={styles.name}>{userEmail}</Text>
        {major? (
          <>
        <Text style={styles.smallText}>Your Major is:</Text>
        <Text style={styles.major}>{major}</Text>
        {specificMajor? (
        <>
        <Text style={styles.smallText}>Your are likely going to study: </Text>
        <Text style={styles.major}>{specificMajor}</Text>
        </>
          ) : null }
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
