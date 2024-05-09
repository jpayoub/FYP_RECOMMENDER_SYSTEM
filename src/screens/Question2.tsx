import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useEffect } from 'react'
import CustomText from '../components/atoms/CustomText';
import CustomRangeSlider from '../components/atoms/CustomRangeSlider';
import CustomButton from '../components/atoms/CustomButton';
import CustomProgressBar from '../components/atoms/CustomProgressBar';
import { useNavigation } from '@react-navigation/native';
import UpperPartQuests from '../components/molecules/UpperPartQests';
import LowerPartQuests from '../components/molecules/LowerPartQuests';
import { useDispatch } from 'react-redux';
import { updatePageNb } from '../redux/slices/userSlice';

const Question2= () => {

    const pageNb = 2;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageNb(pageNb));
     });

    

  return (
    <View style={styles.container}>
        
        <UpperPartQuests 
            text="Question 2"
            type="Title1"        /> 

        <LowerPartQuests 
            question="Do you prefer to work alone or in a team?"
            type="Title2"
            questDesc="(Rate from 1 to 5 where 5 is strong preference for teams)"
            nextpage="Question3" /> 


        
    </View>
  )
}

export default Question2;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    },
    question: {
        padding: 50,
    }
})