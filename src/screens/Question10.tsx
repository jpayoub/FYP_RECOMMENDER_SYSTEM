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

const Question10= () => {

    const pageNb = 10;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageNb(pageNb));
     });

    

  return (
    <View style={styles.container}>
        
        <UpperPartQuests 
            text="Question10"
            type="Title1"

        /> 

        <LowerPartQuests 
            question="What do you prefer indoor or outdoor?"
            type="Title2"
            nextpage="Question11" /> 


        
    </View>
  )
}

export default Question10;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    },
    question: {
        padding: 50,
    }
})