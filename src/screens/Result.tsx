import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/atoms/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { submitQuestions } from "../redux/slices/questionSlice";
import { RootState, AppDispatch } from "../redux/store";
import { updatePageNb } from "../redux/slices/userSlice";

export default function Animation() {
  const [animationFinished, setAnimationFinished] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: RootState) => state.questions);
  const [major, setMajor] = useState<string | null>(null);

  useEffect(() => {
    if (animationFinished) {
      dispatch(submitQuestions(state))
        .then((result: any) => {
          if (result.type === "questions/submitQuestions/fulfilled") {
            setMajor(result.payload.predicted_domain); // Assuming the API response is the major
          }
        })
        .catch((error) => console.error("Error submitting questions:", error));
    }
  }, [animationFinished, dispatch, state]);

  const navigateHome = () => {
    const updatedPgNb = 1;
            dispatch(updatePageNb(updatedPgNb));
    navigation.navigate("Home");
  };
  const navigateRecom = () => {
            const updatedPgNb = 1;
            dispatch(updatePageNb(updatedPgNb));
            navigation.navigate("Question1"); 
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {!animationFinished ? (
        <LottieView
          source={require('../assets/lottie/Animation-ai.json')}
          style={{ width: '100%', height: '100%' }}
          autoPlay
          loop={false}
          onAnimationFinish={() => setAnimationFinished(true)}
        />
      ) : (
        <View style={styles.container}>
          {major ? (
            <>
              <Text>After analyzing your responses to the psychology-related questions
                and evaluating your academic performance, our recommendation system proposes</Text>
                <View style = {styles.majorContainer}>
                <Text style={styles.major}>{major}</Text>
                </View>
                <Text>or a related field based on your interests and strengths.</Text>
                <CustomButton 
                onPress={navigateRecom} 
                text="Retake Test"
                type="PRIMARY" 
              />
              <CustomButton 
                onPress={navigateHome} 
                text="Go Back Home"
                type="PRIMARY" 
              />
            </>
          ) : (
            <Text>Loading your recommended major...</Text>
          )}
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
    padding: 20,
  },
  major: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  majorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,

  },

});