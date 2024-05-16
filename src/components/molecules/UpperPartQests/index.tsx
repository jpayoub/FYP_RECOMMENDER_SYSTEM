import { View, StyleSheet } from 'react-native';
import React from 'react';
import CustomText from '../../atoms/CustomText';
import CustomHeader from '../CustomHeader';

const index = ({text, type}) => {
  return (
    <View style={styles.FirstPart}>

      
            
    <CustomText
        text={text}
        type={type} />

    <CustomHeader />        
    
</View>
  )
}

export default index;

const styles = StyleSheet.create({
    
    FirstPart: {
        backgroundColor: 'blue',
        width: '100%',
        height: '30%',
        padding: 30,
    }
});