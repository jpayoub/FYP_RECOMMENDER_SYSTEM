import { View, StyleSheet } from 'react-native';
import React from 'react';
import CustomText from '../../atoms/CustomText';
import CustomRangeSlider from '../../atoms/CustomRangeSlider';
import CustomButton from '../../atoms/CustomButton';
import { useNavigation } from '@react-navigation/native';
import SlideUpFromBottom from '../../atoms/CustomSlideFromBottom';

const index = ({question, type, questDesc, nextpage}) => {
    const navigation = useNavigation();

    const navigatetoQues = () => {

        navigation.navigate(nextpage, {});    
    }

  return (
    <SlideUpFromBottom children={undefined}>
    <View style={styles.SecondPart}>
            <CustomText 
                text={question}
                type={type}
            />
            <CustomText 
                text={questDesc}
                type="questDesc" />
            <CustomRangeSlider />
            <CustomButton
                onPress={navigatetoQues}
                text="Next"
                type='NEXT' />

                   
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
        paddingHorizontal: 0,
        paddingTop: 40,
    },
    question: {
        padding: 50,
    },
});