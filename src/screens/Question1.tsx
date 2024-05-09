import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import UpperPartQuests from '../components/molecules/UpperPartQests';
import LowerPartQuests from '../components/molecules/LowerPartQuests';
import { useDispatch } from 'react-redux';
import { updatePageNb } from '../redux/slices/userSlice';

const Question1 = () => {

    const pageNb = 1;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageNb(pageNb));
     });

    




    

  return (
    <View style={styles.container}>
        
        <UpperPartQuests 
            text="Question1"
            type="Title1"        /> 

        <LowerPartQuests 
            question="Do you prefer practical or theoretical work?"
            type="Title2"
            questDesc="(Rate from 1 to 5 where 5 is most Practical)"
            nextpage="Question2" /> 


        
    </View>
  )
}

export default Question1;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    },
    question: {
        padding: 50,
    }
})