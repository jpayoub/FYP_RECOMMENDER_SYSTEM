import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import { View, Text } from "react-native";
import CustomButton from "../components/atoms/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function Animation() {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Set animationFinished to true after 3 seconds
      setAnimationFinished(true);
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
        <View>
          <Text>Hello result</Text>

          <CustomButton 
          onPress={navigatehome} 
          text="Go Back Home"
          type="PRIMARY" />
        </View>
      )}
    </View>
  );
}
