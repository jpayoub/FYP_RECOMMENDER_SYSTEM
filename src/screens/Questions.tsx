import { View, StyleSheet } from 'react-native';
import React, { useEffect,useState } from 'react';
import UpperPartQuests from '../components/molecules/UpperPartQests';
import LowerPartQuests from '../components/molecules/LowerPartQuests';
import { useDispatch } from 'react-redux';
import { updatePageNb } from '../redux/slices/userSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
const Questions = () => {
    const pageNb = useSelector((state:RootState)=>state.user.pageNb);
    const dispatch = useDispatch();

     const questions = [{"question":"Do you prefer practical or theoretical work?","questDesc":"(Rate from 1 to 5 where 5 is most Practical)"},
                        {"question":"Do you prefer to work alone or in a team?","questDesc":"(Rate from 1 to 5 where 5 is strong preference for teams)"},
                        {"question":"Rate your interest in technology:","questDesc":"(Rate from 1 to 5 where 5 is the highest)"},
                        {"question":"Are you more creative or analytical?","questDesc":"(Rate from 1 to 5 where 5 is the most Analytical)"},
                        {"question":"Do you prefer indoor or outdoor work?","questDesc":"(Rate from 1 to 5 where 5 is Outdoor)"},
                        {"question":"Rate your problem-solving skills:","questDesc":"(Rate from 1 to 5 where 5 is the highest)"},
                        {"question":"Rate your communication skills:","questDesc":"(Rate from 1 to 5 where 5 is the highest)"},
                        {"question":"Rate your leadership skills:","questDesc":"(Rate from 1 to 5 where 5 is the highest)"},
                        {"question":"How good are you at paying attention to details?","questDesc":"(Rate from 1 to 5 where 5 is the highest)"},
                        {"question":"Rate your organizational skills:","questDesc":"(Rate from 1 to 5 where 5 is the highest)"},
                        {"question":"How important is helping others to you?","questDesc":"(Rate from 1 to 5 where 5 is very important)"},
                        {"question":"How important is making money to you?","questDesc":"(Rate from 1 to 5 where 5 is very important)"},
                        {"question":"How important is job security to you?","questDesc":"(Rate from 1 to 5 where 5 is very important)"},
                        {"question":"How passionate are you about innovation?","questDesc":"(Rate from 1 to 5 where 5 is very passionate)"},
                        {"question":"Rate your interest in physical activities:","questDesc":"(Rate from 1 to 5 where 5 is the highest interest)"},
                        {"question":"How would you rate your debate skills?","questDesc":"(Rate from 1 to 5 where 5 is the highest)"},
                        {"question":"Do you prefer structured routines or spontaneous activities?","questDesc":"(Rate from 1 to 5 where 1 is strongly structured and 5 is strongly spontaneous)"},]
  return (
    <View style={styles.container}>
        
        <UpperPartQuests 
            text={"Question "+pageNb}
            type="Title1"        /> 

        <LowerPartQuests 
            question={pageNb<18?questions[pageNb-1].question:""}
            type="Title2"
            questDesc={pageNb<18?questions[pageNb-1].questDesc:""}
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