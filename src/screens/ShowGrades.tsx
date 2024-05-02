import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native'
import React from 'react'
import CustomText from '../components/atoms/CustomText'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import CustomButton from '../components/atoms/CustomButton';
import CustomItemDetails from '../components/atoms/CustomItemDetails';
import { useNavigation } from '@react-navigation/native';

const ShowGrades = () => {

  const navigation = useNavigation();

    const quest1 = useSelector((state:RootState)=>state.questions.question1);
    const quest2 = useSelector((state:RootState)=>state.questions.question2);
    const quest3 = useSelector((state:RootState)=>state.questions.question3);
    const quest4 = useSelector((state:RootState)=>state.questions.question4);
    const quest5 = useSelector((state:RootState)=>state.questions.question5);
    const quest6 = useSelector((state:RootState)=>state.questions.question6);
    const quest7 = useSelector((state:RootState)=>state.questions.question7);
    const quest8 = useSelector((state:RootState)=>state.questions.question8);
    const quest9 = useSelector((state:RootState)=>state.questions.question9);
    const quest10 = useSelector((state:RootState)=>state.questions.question10);
    const quest11 = useSelector((state:RootState)=>state.questions.question11);
    const quest12 = useSelector((state:RootState)=>state.questions.question12);
    const quest13 = useSelector((state:RootState)=>state.questions.question13);
    const quest14 = useSelector((state:RootState)=>state.questions.question14);
    const quest15 = useSelector((state:RootState)=>state.questions.question15);
    const quest16 = useSelector((state:RootState)=>state.questions.question16);
    const quest17 = useSelector((state:RootState)=>state.questions.question17);
    const maths = useSelector((state:RootState)=>state.questions.Maths);
    const physics = useSelector((state:RootState)=>state.questions.Physics);
    const chemistry = useSelector((state:RootState)=>state.questions.Chemistry);
    const biology = useSelector((state:RootState)=>state.questions.Biology);
    const economic = useSelector((state:RootState)=>state.questions.Economics);
    const sociology = useSelector((state:RootState)=>state.questions.Sociology);
    const history = useSelector((state:RootState)=>state.questions.History);
    const geography = useSelector((state:RootState)=>state.questions.Geography);
    const literature = useSelector((state:RootState)=>state.questions.Literature);

    const airecommender = () => {
        navigation.navigate("Result");
    }

  return (
    <>
    <View style={styles.container}>
      <CustomText
      text="Your Grades"
      type='Title1' />
      </View>
      <ScrollView >
        <View style={styles.scrollview}>
      <CustomText text={"Question 1:   " + quest1} type='Title2'/>
      <CustomText text={"Question 2:   " + quest2} type='Title2'/> 
      <CustomText text={"Question 3:   " + quest3} type='Title2'/>
      <CustomText text={"Question 4:   " + quest4} type='Title2'/> 
      <CustomText text={"Question 5:   " + quest5} type='Title2'/>
      <CustomText text={"Question 6:   " + quest6} type='Title2'/> 
      <CustomText text={"Question 7:   " + quest7} type='Title2'/>
      <CustomText text={"Question 8:   " + quest8} type='Title2'/> 
      <CustomText text={"Question 9:   " + quest9} type='Title2'/>
      <CustomText text={"Question 10:   " + quest10} type='Title2'/> 
      <CustomText text={"Question 11:   " + quest11} type='Title2'/>
      <CustomText text={"Question 12:   " + quest12} type='Title2'/> 
      <CustomText text={"Question 13:   " + quest13} type='Title2'/>
      <CustomText text={"Question 14:   " + quest14} type='Title2'/> 
      <CustomText text={"Question 15:   " + quest15} type='Title2'/>
      <CustomText text={"Question 16:   " + quest16} type='Title2'/> 
      <CustomText text={"Question 17:   " + quest17} type='Title2'/>
      
      <CustomText text={"Maths:   " + maths} type='Title2'/>
      <CustomText text={"Physics:   " + physics} type='Title2'/> 
      <CustomText text={"Chemistry:   " + chemistry} type='Title2'/>
      <CustomText text={"Biology:   " + biology} type='Title2'/> 
      <CustomText text={"Economic:   " + economic} type='Title2'/> 
      <CustomText text={"Sociology:   " + sociology} type='Title2'/>
      <CustomText text={"History:   " + history} type='Title2'/>
      <CustomText text={"Geography:   " + geography} type='Title2'/>
      <CustomText text={"Literature:   " + literature} type='Title2'/>
      <CustomButton text="AI Recommendation" type="AIRECOM" onPress={airecommender} />
      </View>
      
      </ScrollView>
      
      </>
    
  )
}

export default ShowGrades;

const styles=StyleSheet.create({
    scrollview: {
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        backgroundColor: 'blue',
        padding: 30,
        paddingBottom: 50,
    },
    container: {
        padding: 30,
        backgroundColor:'blue',
    }
})