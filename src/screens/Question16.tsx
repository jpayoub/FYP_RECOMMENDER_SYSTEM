import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import UpperPartQuests from '../components/molecules/UpperPartQests';
import LowerPartQuests from '../components/molecules/LowerPartQuests';
import { useDispatch } from 'react-redux';
import { updatePageNb } from '../redux/slices/userSlice';

const Question16= () => {

    const pageNb = 16;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageNb(pageNb));
     });

    

  return (
    <View style={styles.container}>
        
        <UpperPartQuests 
            text="Question16"
            type="Title1"
        /> 

        <LowerPartQuests 
            question="How would you rate your debate skills?"
            type="Title2"
            questDesc="(Rate from 1 to 5 where 5 is the highest)"
            nextpage="Question17"  /> 


        
    </View>
  )
}

export default Question16;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    },
    question: {
        padding: 50,
    }
})