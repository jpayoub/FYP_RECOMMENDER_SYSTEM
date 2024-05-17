import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/atoms/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { updatePageNb } from "../redux/slices/userSlice";
export default function Animation() {
  const [animationFinished, setAnimationFinished] = useState(false);
const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      // Set animationFinished to true after 3 seconds
      setAnimationFinished(true);
      dispatch(updatePageNb(1));
    }, 2500); 

    return () => clearTimeout(timer);
  }, []); 

  const navigation = useNavigation();

  const navigatehome = () => {
    navigation.navigate("Home");
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {!animationFinished ? (
        <LottieView
          source={require('../assets/lottie/Animation-ai.json')}
          style={{ width: '100%', height: '100%' }}
          autoPlay
          loop={false} 
          onAnimationFinish={() => setAnimationFinished(true)} // Update state when animation finishes
        />
      ) : (
        <View style= {styles.container}>
          <Text>After analyzing your responses to the psychology-related questions
             and evaluating your academic performance, our recommendation system proposes {'\n'} 
             <Text style={styles.major}>             Engineering </Text> {'\n'}
             or a related field based on your interests and strengths
          </Text>

          <CustomButton 
          onPress={navigatehome} 
          text="Go Back Home"
          type="PRIMARY" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding:20,
  },
  major: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  }
})