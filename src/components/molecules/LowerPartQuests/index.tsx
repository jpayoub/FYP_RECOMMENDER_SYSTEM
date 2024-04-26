import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from '../../atoms/CustomText'
import CustomRangeSlider from '../../atoms/CustomRangeSlider'
import CustomButton from '../../atoms/CustomButton'
import { useNavigation } from '@react-navigation/native'
import SlideUpFromBottom from '../../atoms/CustomSlideFromBottom'
import CustomProgressBar from '../../atoms/CustomProgressBar'


const index = ({question, type, nextpage, pageNb}) => {
    const navigation = useNavigation();

    const navigatetoQues = () => {

        navigation.navigate(nextpage, {});    
    }

  return (
    <SlideUpFromBottom>
    <View style={styles.SecondPart}>
            <CustomText 
                text={question}
                type={type}
            />
            <CustomRangeSlider
                pageNb={pageNb} />
            <CustomButton
                onPress={navigatetoQues}
                text="Next"
                type='NEXT' />

            <CustomProgressBar
            progress={0.5} />
                   
        </View>
        </SlideUpFromBottom>
  );
};

export default index;

const styles = StyleSheet.create({

    SecondPart: {
        backgroundColor: 'white',
        width: 'auto',
        height: '80%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        padding: 40
    },
    question: {
        padding: 50,
    },
});