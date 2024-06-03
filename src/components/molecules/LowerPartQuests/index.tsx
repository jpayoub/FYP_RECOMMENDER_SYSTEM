import { View, StyleSheet } from 'react-native';
import React from 'react';
import CustomText from '../../atoms/CustomText';
import CustomRangeSlider from '../../atoms/CustomRangeSlider';
import CustomButton from '../../atoms/CustomButton';
import { useNavigation } from '@react-navigation/native';
import SlideUpFromBottom from '../../atoms/CustomSlideFromBottom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { updatePageNb } from '../../../redux/slices/userSlice';

const index = ({question, type, questDesc}) => {
    
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const pageNb = useSelector((state:RootState)=>state.user.pageNb);
    const questions = useSelector((state: RootState) => state.questions.questions);
    const result = useSelector((state:RootState) => state.questions);


    const navigatetoQues = () => {
        console.log('page number', pageNb)
        if (questions && questions.length > 0 && pageNb < questions.length) {
            const updatedPgNb = pageNb+1;
            dispatch(updatePageNb(updatedPgNb))   
        }else{
            pageNb ===17 ? navigation.navigate("Question18") : navigation.navigate("Home",{});
        }
        
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