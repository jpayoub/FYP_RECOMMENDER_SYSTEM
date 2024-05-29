import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import React, { useEffect,useState } from 'react';
import UpperPartQuests from '../components/molecules/UpperPartQests';
import LowerPartQuests from '../components/molecules/LowerPartQuests';
import { useDispatch } from 'react-redux';
import { updatePageNb } from '../redux/slices/userSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { determineAndFetchQuestions } from '../redux/slices/questionSlice';
const Questions = () => {
    const pageNb = useSelector((state: RootState) => state.user.pageNb);
    const questions = useSelector((state: RootState) => state.questions.questions);
    const loading = useSelector((state: RootState) => state.questions.loading);
    const error = useSelector((state: RootState) => state.questions.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(determineAndFetchQuestions());
    }, [dispatch]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    const currentQuestion = questions && questions.length > 0 ? questions[pageNb - 1] : null;


    return (
    <View style={styles.container}>
        
        <UpperPartQuests 
            text={"Question "+pageNb}
            type="Title1"        /> 

        <LowerPartQuests 
            question={currentQuestion ? currentQuestion.question: ""}
            type="Title2"
            questDesc={currentQuestion ? currentQuestion.scale: ""}
            /> 
            


        
    </View>
  )
}

export default Questions;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    },
    question: {
        padding: 50,
    }
})