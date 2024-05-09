import { View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import UpperPartQuests from '../components/molecules/UpperPartQests';
import LowerPartQuests from '../components/molecules/LowerPartQuests';
import { useDispatch } from 'react-redux';
import { updatePageNb } from '../redux/slices/userSlice';

const Question15= () => {

    const pageNb = 15;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageNb(pageNb));
     });

    

  return (
    <View style={styles.container}>
        
        <UpperPartQuests 
            text="Question15"
            type="Title1"
        /> 

        <LowerPartQuests 
            question="Rate your interest in physical activities:"
            type="Title2"
            questDesc="(Rate from 1 to 5 where 5 is the highest interest)"
            nextpage="Question16" /> 


        
    </View>
  )
}

export default Question15;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    },
    question: {
        padding: 50,
    }
})