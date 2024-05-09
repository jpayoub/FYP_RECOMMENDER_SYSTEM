import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useEffect } from 'react';
import UpperPartQuests from '../components/molecules/UpperPartQests';
import LowerPartQuests from '../components/molecules/LowerPartQuests';
import { useDispatch } from 'react-redux';
import { updatePageNb } from '../redux/slices/userSlice';

const Question4= () => {

    const pageNb = 4;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageNb(pageNb));
     });

    

  return (
    <View style={styles.container}>
        
        <UpperPartQuests 
            text="Question4"
            type="Title1"
        /> 

        <LowerPartQuests 
            question="Are you more creative or analytical? "
            type="Title2"
            questDesc="(Rate from 1 to 5 where 5 is the most Analytical)"
            nextpage="Question5" /> 


        
    </View>
  )
}

export default Question4;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    },
    question: {
        padding: 50,
    }
})