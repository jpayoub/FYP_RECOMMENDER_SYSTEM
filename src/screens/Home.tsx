import { View, Text, StyleSheet, TouchableOpacity, Image, ShadowPropTypesIOS, } from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { logout } from '../redux/slices/userSlice';
import { fetchPosts } from '../redux/slices/userSlice';
const Home = () => {
    const navigation = useNavigation();
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
       
            dispatch(fetchPosts(1));
        
    }, [dispatch]);

    const navigateToTest = () => {
        navigation.navigate("Question1");
    };

    const navigateToNews = () => {
        navigation.navigate("News");
    };

    const navigateToProfile = () => {
        navigation.navigate("Profile");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateToTest} style={styles.button}>
                <Image source={require('../assets/images/recomai.png')} style={styles.image} />
                <Text style={styles.text}>RECOMMENDER TEST</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToNews} style={styles.button}>
            <Image source={require('../assets/images/News.jpg')} style={styles.image} />
                <Text style={styles.text}>NEWS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToProfile} style={styles.button}>
            <Image source={require('../assets/images/profile.jpg')} style={styles.image} />
                <Text style={styles.text}>PROFILE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>dispatch(logout())} style={styles.button}>
            <Image source={require('../assets/images/logout.png')} style={styles.image} />
                <Text style={styles.text}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
  container: {
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
  },
  button: {
      backgroundColor: '#ffffff',
      borderRadius: 12,
      width: '70%',
      padding: 10,
      marginBottom: 15,
      shadowColor: 'blue',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      alignItems: 'center',
  },
  image: {
      width: 80,
      height: 80,
      marginBottom: 10,
  },
  text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
  },
});
