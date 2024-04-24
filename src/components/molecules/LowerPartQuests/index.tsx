import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from '../../atoms/CustomText'
import CustomRangeSlider from '../../atoms/CustomRangeSlider'
import CustomButton from '../../atoms/CustomButton'
import { useNavigation } from '@react-navigation/native'

const index = ({question, type, questpage}) => {
    const navigation = useNavigation();
    const navigatetoQues = () => {

        navigation.navigate(questpage, {});    
    }

  return (
    <View style={styles.SecondPart}>
            <CustomText 
                text={question}
                type={type}
            />
            <CustomRangeSlider />
            <CustomButton
                onPress={navigatetoQues}
                text="Next"
                type='PRIMARY' />
                   
        </View>
  )
}

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
    }
})