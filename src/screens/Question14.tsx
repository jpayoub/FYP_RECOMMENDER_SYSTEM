import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import UpperPartQuests from '../components/molecules/UpperPartQests';
import LowerPartQuests from '../components/molecules/LowerPartQuests';
import { useDispatch } from 'react-redux';
import { updatePageNb } from '../redux/slices/userSlice';

const Question14= () => {

    const pageNb = 14;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageNb(pageNb));
     });

    

  return (
    <View style={styles.container}>
        
        <UpperPartQuests 
            text="Question14"
            type="Title1"
        /> 

        <LowerPartQuests 
            question="How passionate are you about innovation?"
            type="Title2"
            questDesc="(Rate from 1 to 5 where 5 is very passionate)"
            nextpage="Question15" /> 


        
    </View>
  )
}

export default Question14;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    },
    question: {
        padding: 50,
    }
})