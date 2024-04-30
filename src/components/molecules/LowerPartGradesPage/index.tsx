import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CustomText from '../../atoms/CustomText'
import CustomRangeSlider from '../../atoms/CustomRangeSlider'
import CustomButton from '../../atoms/CustomButton'
import { useNavigation } from '@react-navigation/native'
import SlideUpFromBottom from '../../atoms/CustomSlideFromBottom'
import CustomProgressBar from '../../atoms/CustomProgressBar'
import CustomGradeTable from '../../atoms/CustomGradeTable'


const index = ({nextpage}) => {

    


  return (
    <ScrollView style={styles.scrollview}>
    <SlideUpFromBottom children={undefined}>
    <View style={styles.SecondPart}>
        
            <CustomGradeTable
            nextpage={nextpage} />

            
            
                   
        </View>
        </SlideUpFromBottom>
        </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({

    SecondPart: {
        flex:1,
        alignContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '80%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        padding: 40
    },
    question: {
        padding: 50,
    },
    scrollview: {
        width: '100%',
    }
});