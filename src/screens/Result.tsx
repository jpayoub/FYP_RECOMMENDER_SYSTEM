import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/atoms/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { determineAndFetchQuestions, submitQuestions, submitSpecificQuestions, updateResult } from "../redux/slices/questionSlice";
import { RootState, AppDispatch } from "../redux/store";
import { updatePageNb } from "../redux/slices/userSlice";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export default function Animation() {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: RootState) => state.questions);
  const result = useSelector((state: RootState) => state.questions.result);
  const subresult = useSelector((state: RootState) => state.questions.subresult);

  const userEmail = auth().currentUser?.email;

  useEffect(() => {

    if (!result)
      {
        dispatch(submitQuestions(state))
       
      } else {
        console.log("fetching specific major here");
        dispatch(submitSpecificQuestions(state))
        
      }
  }, []);
      
      
  
      


  useEffect(() => {
    const updateMajorInFirestore = async () => {
      if (userEmail && result) {
        try {
          await firestore().collection('Users').doc(userEmail).set(
            { major: result },
            { merge: true } // Use merge to update the field without overwriting the entire document
            
          );
          dispatch(updateResult(result));
          console.log("Major updated successfully in Firestore");
        } catch (error) {
          console.error("Error updating major in Firestore:", error);
        }
      }
    };

    const updateSpecificMajorInFirestore = async () => {
      if (userEmail && result) {
        try {
          await firestore().collection('Users').doc(userEmail).set(
            { specific_major: subresult },
            { merge: true } // Use merge to update the field without overwriting the entire document
            
          );
          dispatch(updateResult(result));
          console.log("Specific Major updated successfully in Firestore");
        } catch (error) {
          console.error("Error updating specific major in Firestore:", error);
        }
      }
    };
    if (result) {
      updateMajorInFirestore();
      dispatch(updateResult(result));
    } else if (subresult) {
      updateSpecificMajorInFirestore();
    }
  }, [result, userEmail]); 

  const navigateHome = () => {
    const updatedPgNb = 1;
            dispatch(updatePageNb(updatedPgNb));
    navigation.navigate("Home");
  };
  const navigateRecom = () => {
    dispatch(updateResult(result));
            const updatedPgNb = 1;
            dispatch(updatePageNb(updatedPgNb));
            dispatch(determineAndFetchQuestions());
            navigation.navigate("Question1"); 
  };

  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
        <View style={styles.container}>
          {result ? (
            <>
              <Text>After analyzing your responses to the psychology-related questions
                and evaluating your academic performance, our recommendation system proposes</Text>
                <View style = {styles.majorContainer}>
                <Text style={styles.major}>{result}</Text>
                {subresult? (
                  <>
                  <Text>Your are likely going to be: </Text>
                  <Text style={styles.major}>{subresult}</Text>
                  </>
                    ) : null }
                </View>
                {result && !subresult ? (
                <CustomButton 
                onPress={navigateRecom} 
                text="Continue the Test"
                type="PRIMARY" 
              /> ) : (
              <CustomButton 
                onPress={navigateHome} 
                text="Go Back Home"
                type="PRIMARY" 
              /> )}
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