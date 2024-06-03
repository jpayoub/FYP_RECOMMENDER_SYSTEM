import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/atoms/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { determineAndFetchQuestions, submitQuestions, updateResult } from "../redux/slices/questionSlice";
import { RootState, AppDispatch } from "../redux/store";
import { updatePageNb } from "../redux/slices/userSlice";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export default function Animation() {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: RootState) => state.questions);
  const [major, setMajor] = useState<string | null>(null);
  const userEmail = auth().currentUser?.email;

  useEffect(() => {
    
      dispatch(submitQuestions(state))
        .then((result: any) => {
          if (result.type === "questions/submitQuestions/fulfilled") {
            setMajor(result.payload.predicted_domain); // Assuming the API response is the major
          }
        })
        .catch((error) => console.error("Error submitting questions:", error));
    
  }, [ dispatch, state]);


  useEffect(() => {
    const updateMajorInFirestore = async () => {
      if (userEmail && major) {
        try {
          await firestore().collection('Users').doc(userEmail).set(
            { major: major },
            { merge: true } // Use merge to update the field without overwriting the entire document
            
          );
          dispatch(updateResult(major));
          console.log("Major updated successfully in Firestore");
        } catch (error) {
          console.error("Error updating major in Firestore:", error);
        }
      }
    };
    if (major) {
      updateMajorInFirestore();
      dispatch(updateResult(major));

    }
  }, [major, userEmail]);

  const navigateHome = () => {
    const updatedPgNb = 1;
            dispatch(updatePageNb(updatedPgNb));
    navigation.navigate("Home");
  };
  const navigateRecom = () => {
    dispatch(updateResult(major));
            const updatedPgNb = 1;
            dispatch(updatePageNb(updatedPgNb));
            dispatch(determineAndFetchQuestions());
            navigation.navigate("Question1"); 
  };

  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
        <View style={styles.container}>
          {major ? (
            <>
              <Text>After analyzing your responses to the psychology-related questions
                and evaluating your academic performance, our recommendation system proposes</Text>
                <View style = {styles.majorContainer}>
                <Text style={styles.major}>{major}</Text>
                </View>
                <CustomButton 
                onPress={navigateRecom} 
                text="Continue the Test"
                type="PRIMARY" 
              />
              {/* <CustomButton 
                onPress={navigateHome} 
                text="Go Back Home"
                type="PRIMARY" 
              /> */}
            </>
          ) : (
            <Text>Loading your recommended major...</Text>
          )}
        </View>
      
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