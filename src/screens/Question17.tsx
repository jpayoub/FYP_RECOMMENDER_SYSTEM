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
import CustomItem from '../components/atoms/CustomItem';

const Question17= () => {

    const pageNb = 17;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageNb(pageNb));
     });

    

  return (
    <View style={styles.container}>
        
        <UpperPartQuests 
            text="Question17"
            type="Title1"
        /> 

        <LowerPartQuests 
            question="Do you prefer structured routines or spontaneous activities?"
            type="Title2"
            questDesc="(Rate from 1 to 5 where 1 is strongly structured and 5 is strongly spontaneous)"
            nextpage="Question18" /> 

            


        
    </View>
  )
}

export default Question17;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    },
    question: {
        padding: 50,
    }
})