import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import UpperPartQuests from '../components/molecules/UpperPartQests';
import LowerPartQuests from '../components/molecules/LowerPartQuests';
import { useDispatch } from 'react-redux';
import { updatePageNb } from '../redux/slices/userSlice';

const Question3= () => {

    const pageNb = 3;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageNb(pageNb));
     });

    

  return (
    <View style={styles.container}>
        
        <UpperPartQuests 
            text="Question3"
            type="Title1"
        /> 

        <LowerPartQuests 
            question="Rate your interest in technology:"
            type="Title2"
            questDesc="(Rate from 1 to 5 where 5 is the highest)"
            nextpage="Question4" /> 


        
    </View>
  )
}

export default Question3;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    },
    question: {
        padding: 50,
    }
})