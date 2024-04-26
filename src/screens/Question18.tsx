import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import CustomGradeTable from '../components/atoms/CustomGradeTable';
import LowerPartGradesPage from '../components/molecules/LowerPartGradesPage';
import UpperPartGradesPage from '../components/molecules/UpperPartGradesPage';
import { useDispatch } from 'react-redux';
import { updatePageNb } from '../redux/slices/userSlice';

const Question18 = () => {

    const pageNb = 18;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updatePageNb(pageNb));
     });

  return (
    <View style={styles.container} >
        <UpperPartGradesPage text="Question 18" type="Title1" />
        <LowerPartGradesPage 
        nextpage="Question1" /> 

       
    </View>
  )
}

export default Question18;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})