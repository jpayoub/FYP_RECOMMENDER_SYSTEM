import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import UpperPartQuests from '../components/molecules/UpperPartQests';
import LowerPartQuests from '../components/molecules/LowerPartQuests';
import { useDispatch } from 'react-redux';
import { updatePageNb } from '../redux/slices/userSlice';

const Question13= () => {

    const pageNb = 13;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageNb(pageNb));
     });


    

  return (
    <View style={styles.container}>
        
        <UpperPartQuests 
            text="Question13"
            type="Title1"
        /> 

        <LowerPartQuests 
            question="How important is job security to you?"
            type="Title2"
            questDesc="(Rate from 1 to 5 where 5 is very important)"
            nextpage="Question14" /> 


        
    </View>
  )
}

export default Question13;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    },
    question: {
        padding: 50,
    }
})