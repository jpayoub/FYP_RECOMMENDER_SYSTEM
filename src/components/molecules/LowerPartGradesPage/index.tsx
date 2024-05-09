import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import SlideUpFromBottom from '../../atoms/CustomSlideFromBottom';
import CustomGradeTable from '../../atoms/CustomGradeTable';


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