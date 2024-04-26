import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import CustomText from '../components/atoms/CustomText';
import CustomRangeSlider from '../components/atoms/CustomRangeSlider';
import CustomButton from '../components/atoms/CustomButton';
import CustomProgressBar from '../components/atoms/CustomProgressBar';
import { useNavigation } from '@react-navigation/native';
import UpperPartQuests from '../components/molecules/UpperPartQests';
import LowerPartQuests from '../components/molecules/LowerPartQuests';

const Question12= () => {

    const pageNb = 12;


    

  return (
    <View style={styles.container}>
        
        <UpperPartQuests 
            text="Question12"
            type="Title1"
        /> 

        <LowerPartQuests 
            question="What do you prefer indoor or outdoor?"
            type="Title2"
            nextpage="Question13"
            pageNb={pageNb}
        /> 


        
    </View>
  )
}

export default Question12;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    },
    question: {
        padding: 50,
    }
})